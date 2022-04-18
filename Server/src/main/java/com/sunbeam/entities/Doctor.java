package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "doctor_tb")
public class Doctor {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "doctor_id")
	private int doctorId;
	@Column(name = "emp_id")
	private int empId;
	private int charges;
	private String specialization;

	@Override
	public String toString() {
		return "Doctor [doctorId=" + doctorId + ", empId=" + empId + ", charges=" + charges + ", specialization="
				+ specialization + "]";
	}

	public Doctor(int doctorId, int empId, int charges, String specialization) {
		super();
		this.doctorId = doctorId;
		this.empId = empId;
		this.charges = charges;
		this.specialization = specialization;
	}

	public Doctor() {
		super();
	}

	public int getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public int getCharges() {
		return charges;
	}

	public void setCharges(int charges) {
		this.charges = charges;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

}
