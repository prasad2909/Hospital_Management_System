package com.sunbeam.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dtos.EmployeeDto;
import com.sunbeam.dtos.EmployeePasswordResetDto;
import com.sunbeam.entities.Credential;
import com.sunbeam.entities.Employee;
import com.sunbeam.entities.Role;
import com.sunbeam.services.EmployeeServiceImpl;

@CrossOrigin
@RequestMapping("/user")
@RestController
public class EmployeeController {
	@Autowired
	EmployeeServiceImpl employeeServiceImpl;
	
	
	@PostMapping("/signin")
	public ResponseEntity<?> signin(@RequestBody Credential cred)
	{
		System.out.println(cred);
		EmployeeDto user=employeeServiceImpl.findByEmailAndPassword(cred);
		System.out.println(user);
		if(user==null)
			return Response.error("user not found");
		return Response.success(user);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody EmployeeDto userdto)
	{
		Map<String, Object> map = employeeServiceImpl.save(userdto);
		return Response.success(map);
	}
	
	@GetMapping("/search")
	public ResponseEntity<?> allUsers()
	{
		List<Employee> users=employeeServiceImpl.findAllUsers();
		return Response.success(users);
	}
	
	@GetMapping("/search/{id}")
	public ResponseEntity<?> userById(@PathVariable int id)
	{
		EmployeeDto user=employeeServiceImpl.findById(id);
		return Response.success(user);
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addUser(@RequestBody EmployeeDto userdto)
	{
		Map<String, Object> map = employeeServiceImpl.save(userdto);
		return Response.success(map);
	}
	
//	@PutMapping("/edit/{emp_id}")
//	public ResponseEntity<?> editUser(@RequestBody String name,@RequestBody String role,@RequestBody String security_question,@RequestBody String security_answer,@RequestBody Date dob,@RequestBody Date hire_date,@RequestBody String phone_no,@RequestBody String salary,@PathVariable int emp_id)
//	{
//		int editedUser = userservice.editUser(name, role, security_question, security_answer, dob, hire_date, phone_no, salary, emp_id);
//		return Response.success(editedUser);
//	}
	
	@PutMapping("/edit/{emp_id}")
	public ResponseEntity<?> editUser(@RequestBody Employee employee,@PathVariable int emp_id)
	{
		Map<String, Object> editedUser = employeeServiceImpl.editUser(emp_id, employee);
		return Response.success(editedUser);
	}
	
//	@PostMapping("/edit/{emp_id}")
//	public ResponseEntity<?> editUser(@PathVariable int emp_id,@RequestBody String name)
//	{
//		int editedUser = userservice.editUser(emp_id,name);
//		return Response.success(editedUser);
//	}
	
	@PostMapping("/delete/{emp_id}")
	public ResponseEntity<?> deleteUser(@PathVariable int emp_id)
	{
		employeeServiceImpl.deleteUser(emp_id);
		return Response.success("employee deleted succesfully");
	}
	
	@GetMapping("/getalldoctors")
	public ResponseEntity<?> getAllDoctors(@RequestBody Role role)
	{
		System.out.println(role);
		List<Employee> doctors = employeeServiceImpl.findAllDoctors(role.getRole());
		return Response.success(doctors);
	}
	
	@GetMapping("/getdoctorid")
	public ResponseEntity<?> getDoctorId(@RequestBody String name)
	{
		System.out.println(name);
		Employee doctor = employeeServiceImpl.findDoctorId(name);
		return Response.success(doctor);
	}
	
	@GetMapping("/getbyname/{name}")
	public ResponseEntity<?> getUserByName(@PathVariable String name)
	{
		System.out.println(name);
		Employee user = employeeServiceImpl.findByName(name);
		return Response.success(user);
	}
	//deepak update password
	@PostMapping("/emailCheck")
	public ResponseEntity<?> checkIfEmailIsValid(@RequestBody EmployeePasswordResetDto user ){
		return Response.success(employeeServiceImpl.findIfEmailExists(user.getEmail()));
	}
	@PostMapping("/questionCheck")
	public ResponseEntity<?> checkIfQuestionIsValid(@RequestBody EmployeePasswordResetDto user ){
		return Response.success(employeeServiceImpl.findIfSecurityQuestionIsCorrect(user));
	}
	@PostMapping("/answerCheck")
	public ResponseEntity<?> checkIfAnswerIsValid(@RequestBody EmployeePasswordResetDto user ){
		return Response.success(employeeServiceImpl.findIfSecurityQuestionIsCorrect(user));
	}
	
	@PostMapping("/updatePassword")
	public ResponseEntity<?> updatePassword(@RequestBody EmployeePasswordResetDto user ){
		return Response.success(employeeServiceImpl.updatePassword(user)?"UPDATED":"FAILED");
	}
	
}
