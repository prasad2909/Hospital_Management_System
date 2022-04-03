package com.sunbeam.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.EmployeeDao;
import com.sunbeam.dtos.EmployeeDto;
import com.sunbeam.dtos.EmployeePasswordResetDto;
import com.sunbeam.dtos.EntityDtoConvertor;
import com.sunbeam.entities.Credential;
import com.sunbeam.entities.Employee;

@Transactional
@Service
public class EmployeeServiceImpl {
	@Autowired
	EmployeeDao userdao;
	@Autowired
	EntityDtoConvertor convertor;
	@Autowired
	PasswordEncoder passwordencoder ;
	
	public EmployeeDto findById(int id)
	{
		Employee user=userdao.getById(id);
		return convertor.entityToDto(user);
	}
	
	public EmployeeDto findByEmail(String email)
	{
		Employee user=userdao.findByEmail(email);
		System.out.println("inside service layer "+user);
		return convertor.entityToDto(user);
	}
	
	
	
	public EmployeeDto findByEmailAndPassword(Credential cred)
	{
		Employee user=userdao.findByEmail(cred.getEmail());
		System.out.println("inside service layer "+user);
		String pmpassword=cred.getPassword();
		if(user != null && passwordencoder.matches(pmpassword, user.getPassword()))
		{
			System.out.println("inside if condition of service layer");
			return convertor.entityToDto(user);
		}
		else
		{
			return null;
		}
	}
	
	public Map<String, Object> save(EmployeeDto userdto)
	{
		String password=userdto.getPassword();
		String encryptpassword=passwordencoder.encode(password);
		userdto.setPassword(encryptpassword);
		Employee user=convertor.dtoToEntity(userdto);
		System.out.println(user);
		user=userdao.save(user);
		return Collections.singletonMap("insertedid",user);
		
		
	}
	
	public List<Employee> findAllUsers()
	{
		List<Employee> users=new ArrayList<>();
		users=userdao.findAll();
		return users;
	}

	
	public Map<String, Object> editUser(int emp_id, Employee updateduser) {
		if(userdao.existsById(emp_id)) {
			Employee user=userdao.getById(emp_id);
			user.setName(updateduser.getName());
			user.setRole(updateduser.getRole());
			user.setEmail(updateduser.getEmail());
			user.setDob(updateduser.getDob());
			user.setHireDate(updateduser.getHireDate());
			user.setPhoneNo(updateduser.getPhoneNo());
			user.setSalary(updateduser.getSalary());
			user.setSecurityQuestion(updateduser.getSecurityQuestion());
			user.setSecurityAnswer(updateduser.getSecurityAnswer());
			return Collections.singletonMap("changedRows", 1);
		}
		return Collections.singletonMap("changedRows", 0);
	}
	
	public List<Employee> findAllDoctors(String role)
	{
		List<Employee> doctors = userdao.findByRole(role);
		return doctors;
	}
	
	public Employee findDoctorId(String name)
	{
		System.out.println(name);
		Employee doctors = userdao.findByName(name);
		return doctors;
	}
	
	public void deleteUser(int id)
	{
		userdao.deleteById(id);
	}
	
	public Employee findByName(String name)
	{
		return userdao.findByName(name);
	}
	//deepak password reset
	public boolean findIfEmailExists(String email) {
		return userdao.existsByEmail(email);
		 
	}
	public boolean findIfSecurityQuestionIsCorrect(EmployeePasswordResetDto user) {
		Employee employee = userdao.findByEmail(user.getEmail());
		if(employee!=null) {
			if(employee.getSecurityQuestion().equals(user.getSecurityQuestion())) {
				return true;
			}
		}
		return false;
	}
	public boolean findIfSecurityAnswerIsCorrect(EmployeePasswordResetDto user) {
		Employee employee = userdao.findByEmail(user.getEmail());
		if(employee!=null) {
			if(employee.getSecurityQuestion().equals(user.getSecurityQuestion())&&
					employee.getSecurityAnswer().equals(user.getSecurityAnswer())) {
				return true;
			}
		}
		return false;
	}
	public boolean updatePassword(EmployeePasswordResetDto user) {
		 Employee employee = userdao.findByEmail(user.getEmail());
		
		if(employee!=null && employee.getSecurityQuestion().equals(user.getSecurityQuestion())&&
				employee.getSecurityAnswer().equals(user.getSecurityAnswer())) {
			
			employee.setPassword(passwordencoder.encode(user.getPassword()));
			
			userdao.save(employee);
			return true;
		}
		return false;
		
		
	}
}
