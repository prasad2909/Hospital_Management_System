package com.sunbeam.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.validation.annotation.Validated;

@Validated
@Entity
@Table(name = "emp_tb")
public class Employee {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "emp_id")
	private int empId;
	private String role;
	private String email;
	private String password;
	@Column(name = "security_question")
	private String securityQuestion;
	@Column(name = "security_answer")
	private String securityAnswer;
	private String name;
	@Temporal( TemporalType.DATE)
	private Date dob;
	@Temporal(TemporalType.DATE)
	@Column(name = "hire_date")
	private Date hireDate;
	@Column(name = "phone_no")
	private String phoneNo;
	private String salary;
			
	public Employee() 
	{
		super();
	}

	public Employee(int empId, String role, String email, String password, String securityQuestion,
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

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", role=" + role + ", email=" + email + ", password=" + password
				+ ", securityQuestion=" + securityQuestion + ", securityAnswer=" + securityAnswer + ", name=" + name
				+ ", dob=" + dob + ", hireDate=" + hireDate + ", phoneNo=" + phoneNo + ", salary=" + salary + "]";
	}


	}
