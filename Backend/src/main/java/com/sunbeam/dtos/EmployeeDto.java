package com.sunbeam.dtos;

import java.util.Date;

public class EmployeeDto {
	private int empId;
	private String role;
	private String email;
	private String password;
	private String securityQuestion;
	private String securityAnswer;
	private String name;
	private Date dob;
	private Date hireDate;
	private String phoneNo;
	private String salary;
	
	public EmployeeDto() {
		
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSecurityQuestion() {
		return securityQuestion;
	}

	public void setSecurityQuestion(String securityQuestion) {
		this.securityQuestion = securityQuestion;
	}

	public String getSecurityAnswer() {
		return securityAnswer;
	}

	public void setSecurityAnswer(String securityAnswer) {
		this.securityAnswer = securityAnswer;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Date getHireDate() {
		return hireDate;
	}

	public void setHireDate(Date hireDate) {
		this.hireDate = hireDate;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getSalary() {
		return salary;
	}

	public void setSalary(String salary) {
		this.salary = salary;
	}

	public EmployeeDto(int empId, String role, String email, String password, String securityQuestion,
			String securityAnswer, String name, Date dob, Date hireDate, String phoneNo, String salary) {
		super();
		this.empId = empId;
		this.role = role;
		this.email = email;
		this.password = password;
		this.securityQuestion = securityQuestion;
		this.securityAnswer = securityAnswer;
		this.name = name;
		this.dob = dob;
		this.hireDate = hireDate;
		this.phoneNo = phoneNo;
		this.salary = salary;
	}

	@Override
	public String toString() {
		return "EmployeeDto [empId=" + empId + ", role=" + role + ", email=" + email + ", password=" + password
				+ ", securityQuestion=" + securityQuestion + ", securityAnswer=" + securityAnswer + ", name=" + name
				+ ", dob=" + dob + ", hireDate=" + hireDate + ", phoneNo=" + phoneNo + ", salary=" + salary + "]";
	}

	

	
}
