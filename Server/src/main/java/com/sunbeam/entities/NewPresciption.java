package com.sunbeam.entities;

public class NewPresciption {
	private int presId;
	private String medicineName;
	private int noOfDays;
	public NewPresciption() {
		super();
	}
	
	public NewPresciption(int presId, String medicineName, int noOfDays) {
		super();
		this.presId = presId;
		this.medicineName = medicineName;
		this.noOfDays = noOfDays;
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
	@Override
	public String toString() {
		return "NewPresciption [presId=" + presId + ", medicineName=" + medicineName + ", noOfDays=" + noOfDays + "]";
	}
	public int getPresId() {
		return presId;
	}
	public void setPresId(int presId) {
		this.presId = presId;
	}
	
	
	
	
}
