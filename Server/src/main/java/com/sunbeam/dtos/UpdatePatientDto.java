package com.sunbeam.dtos;

import java.sql.Date;

/**
 * @author Deepak
 *
 */
/**
 * @author Deepak
 *
 */
public class UpdatePatientDto {

	private int patId;
	private String paymentStatus;
	private Date relaseDate;
	public UpdatePatientDto(int patId, String paymentStatus, Date relaseDate) {
		super();
		this.patId = patId;
		this.paymentStatus = paymentStatus;
		this.relaseDate = relaseDate;
	}
	public UpdatePatientDto() {
		super();
		// TODO Auto-generated constructor stub
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
	public Date getRelaseDate() {
		return relaseDate;
	}
	public void setRelaseDate(Date relaseDate) {
		this.relaseDate = relaseDate;
	}
	@Override
	public String toString() {
		return "UpdatePatientDto [patId=" + patId + ", paymentStatus=" + paymentStatus + ", relaseDate=" + relaseDate
				+ "]";
	}
	
}
