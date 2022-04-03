package com.sunbeam.entities;
/*
 *  ward_bed_id | varchar(100) | NO   | PRI | NULL    |       |
| charges     | int          | YES  |     | NULL    |       |
| status      | int          | YES  |     | NULL
 */

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.validation.annotation.Validated;

@Validated
@Entity
@Table(name = "ward_bed_charges_tb")
public class WardBed {
    @Column(name="ward_bed_id")
	@Id
	private String wardBedId;
	private int charges;
	private int status;
	public WardBed(String wardBedId, int charges, int status) {
		super();
		this.wardBedId = wardBedId;
		this.charges = charges;
		this.status = status;
	}
	
	public WardBed() {
		super();
	}


	public String getWardBedId() {
		return wardBedId;
	}


	public void setWardBedId(String wardBedId) {
		this.wardBedId = wardBedId;
	}


	public int getCharges() {
		return charges;
	}


	public void setCharges(int charges) {
		this.charges = charges;
	}


	public int getStatus() {
		return status;
	}


	public void setStatus(int status) {
		this.status = status;
	}


	@Override
	public String toString() {
		return "WardBed [wardBedId=" + wardBedId + ", charges=" + charges + ", status=" + status + "]";
	}
	
	
}
