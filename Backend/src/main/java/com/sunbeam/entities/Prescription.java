package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.validation.annotation.Validated;
@Validated
@Entity
@Table(name = "prescription_tb")
public class Prescription {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "pres_id")
	@Id
	private int presId;
	@Column(name = "medicine_name")
	private String medicineName;
	@Column(name = "no_of_days")
	private int noOfDays;

	public Prescription() {
		super();
	}

	public Prescription(int presId, String medicineName, int noOfDays) {
		super();
		this.presId = presId;
		this.medicineName = medicineName;
		this.noOfDays = noOfDays;
	}

	@Override
	public String toString() {
		return "Prescription [presId=" + presId + ", medicineName=" + medicineName + ", noOfDays=" + noOfDays + "]";
	}

	public int getPresId() {
		return presId;
	}

	public void setPresId(int presId) {
		this.presId = presId;
	}

	public String getMedicineName() {
		return medicineName;
	}

	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}

	public int getNoOfDays() {
		return noOfDays;
	}

	public void setNoOfDays(int noOfDays) {
		this.noOfDays = noOfDays;
	}

}
