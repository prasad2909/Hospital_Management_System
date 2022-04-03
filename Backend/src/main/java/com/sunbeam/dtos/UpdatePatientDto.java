package com.sunbeam.dtos;

/**
 * @author Deepak
 *
 */
public class UpdatePatientDto {

	private int patId;
	private String paymentStatus;
	public UpdatePatientDto(int patId, String paymentStatus) {
		super();
		this.patId = patId;
		this.paymentStatus = paymentStatus;
	}
	public int getPatId() {
		return patId;
	}
	public void setPatId(int patId) {
		this.patId = patId;
	}
	public String getPaymentStatus() {
		return paymentStatus;
	}
	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	
}
