package com.sunbeam.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.validation.annotation.Validated;
@Validated
@Entity
@Table(name = "active_patient_tb")
public class Patient {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "pat_id")
	private int patId;
	@Column(name = "doctor_id")
	private int doctorId;
	@Column(name = "ward_bed_id")
	private String wardBedId;
	@Column(name = "pres_id")
	private int presId;
	private String email;
	private String password;
	@Column(name = "phone_no")
	private String phoneNo;
	private String name;
	private Date dob;
	@Column(name = "blood_gr")
	private String bloodGr;
	@Column(name = "date_of_admission")
	private Date dateOfAdmission;
	@Column(name = "date_of_release")
	private Date dateOfRelease;
	@Column(name = "patient_problem")
	private String patientProblem;
	@Column(name = "payment_status")
	private String paymentStatus;
	@Column(name = "bill_amount")
	private int billAmount;
	

	public int getPatId() {
		return patId;
	}

	public void setPatId(int patId) {
		this.patId = patId;
	}

	public int getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}

	public String getWardBedId() {
		return wardBedId;
	}

	public void setWardBedId(String wardBedId) {
		this.wardBedId = wardBedId;
	}

	public int getPresId() {
		return presId;
	}

	public void setPresId(int presId) {
		this.presId = presId;
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

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
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

	public String getBloodGr() {
		return bloodGr;
	}

	public void setBloodGr(String bloodGr) {
		this.bloodGr = bloodGr;
	}

	public Date getDateOfAdmission() {
		return dateOfAdmission;
	}

	public void setDateOfAdmission(Date dateOfAdmission) {
		this.dateOfAdmission = dateOfAdmission;
	}

	public Date getDateOfRelease() {
		return dateOfRelease;
	}

	public void setDateOfRelease(Date dateOfRelease) {
		this.dateOfRelease = dateOfRelease;
	}

	public String getPatientProblem() {
		return patientProblem;
	}

	public void setPatientProblem(String patientProblem) {
		this.patientProblem = patientProblem;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public int getBillAmount() {
		return billAmount;
	}

	public void setBillAmount(int billAmount) {
		this.billAmount = billAmount;
	}

	public Patient(int patId, int doctorId, String wardBedId, int presId, String email, String password, String phoneNo,
			String name, Date dob, String bloodGr, Date dateOfAdmission, Date dateOfRelease, String patientProblem,
			String paymentStatus, int billAmount) {
		super();
		this.patId = patId;
		this.doctorId = doctorId;
		this.wardBedId = wardBedId;
		this.presId = presId;
		this.email = email;
		this.password = password;
		this.phoneNo = phoneNo;
		this.name = name;
		this.dob = dob;
		this.bloodGr = bloodGr;
		this.dateOfAdmission = dateOfAdmission;
		this.dateOfRelease = dateOfRelease;
		this.patientProblem = patientProblem;
		this.paymentStatus = paymentStatus;
		this.billAmount = billAmount;
	}

	public Patient() {
		super();
	}

	@Override
	public String toString() {
		return "Patient [patId=" + patId + ", doctorId=" + doctorId + ", wardBedId=" + wardBedId + ", presId=" + presId
				+ ", email=" + email + ", password=" + password + ", phoneNo=" + phoneNo + ", name=" + name + ", dob="
				+ dob + ", bloodGr=" + bloodGr + ", dateOfAdmission=" + dateOfAdmission + ", dateOfRelease="
				+ dateOfRelease + ", patientProblem=" + patientProblem + ", paymentStatus=" + paymentStatus
				+ ", billAmount=" + billAmount + "]";
	}
}
