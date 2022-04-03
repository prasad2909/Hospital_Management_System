package com.sunbeam.dtos;

import org.springframework.stereotype.Component;

import com.sunbeam.entities.Employee;
import com.sunbeam.entities.Patient;
@Component
public class EntityDtoConvertor {
	
	public EmployeeDto entityToDto(Employee user)
	{
		EmployeeDto dto=new EmployeeDto();
		dto.setEmpId(user.getEmpId());
		dto.setName(user.getName());
		dto.setEmail(user.getEmail());
		dto.setRole(user.getRole());
		dto.setPhoneNo(user.getPhoneNo());
		dto.setSecurityQuestion(user.getSecurityQuestion());
		dto.setSecurityAnswer(user.getSecurityAnswer());
		dto.setDob(user.getDob());
		dto.setHireDate(user.getHireDate());
		dto.setSalary(user.getSalary());
		
		return dto;
	}

	public Employee dtoToEntity(EmployeeDto userdto)
	{
		Employee user=new Employee();
		user.setEmpId(userdto.getEmpId());
		user.setName(userdto.getName());
		user.setEmail(userdto.getEmail());
		user.setPhoneNo(userdto.getPhoneNo());
		user.setRole(userdto.getRole());
		user.setSecurityQuestion(userdto.getSecurityQuestion());
		user.setSecurityAnswer(userdto.getSecurityAnswer());
		user.setPassword(userdto.getPassword());
		user.setDob(userdto.getDob());
		user.setHireDate(userdto.getHireDate());
		user.setSalary(userdto.getSalary());
		return user;
	}
	
	public Patient patientEntityToDtoConverter(Patient patient) {
		patient.setPassword(null);
		return patient;
	}
	
	
	
	

}
