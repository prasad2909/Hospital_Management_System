package com.sunbeam.dtos;

import java.sql.Date;

public class PatientDto {

	private int patId;
	private int doctorId;
	private String wardBedId;
	private int presId;
	private String email;
	private String phoneNo;
	private String name;
	private Date dob;
	private String bloodGr;
	private Date dateOfAdmission;
	private Date dateOfRelease;
	private String patientProblem;
	private String paymentStatus;
	private int billAmount;

	@Override
	public String toString() {
		return "PatientDto [patId=" + patId + ", doctorId=" + doctorId + ", wardBedId=" + wardBedId + ", presId="
				+ presId + ", email=" + email + ", phoneNo=" + phoneNo + ", name=" + name + ", dob=" + dob
				+ ", bloodGr=" + bloodGr + ", dateOfAdmission=" + dateOfAdmission + ", dateOfRelease=" + dateOfRelease
				+ ", patientProblem=" + patientProblem + ", paymentStatus=" + paymentStatus + ", billAmount="
				+ billAmount + "]";
	}

	public PatientDto(int patId, int doctorId, String wardBedId, int presId, String email, String phoneNo, String name,
			Date dob, String bloodGr, Date dateOfAdmission, Date dateOfRelease, String patientProblem,
			String paymentStatus, int billAmount) {
		super();
		this.patId = patId;
		this.doctorId = doctorId;
		this.wardBedId = wardBedId;
		this.presId = presId;
		this.email = email;
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

	public PatientDto() {
		super();
	}

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

}
