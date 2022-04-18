package com.sunbeam.entities;
/*
 *  medicine_name | varchar(100) | NO   | PRI | NULL    |       |
| price         | int          | YES  |     | NULL
 */
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.validation.annotation.Validated;

@Validated
@Entity
@Table(name = "medicine_tb")
public class Medicine {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="medicine_name")
	@Id
	private String medicineName;
	@Column(name="price")
	private int price;
	public Medicine() {
		super();
	}
	public Medicine(String medicineName, int price) {
		super();
		this.medicineName = medicineName;
		this.price = price;
	}
	public String getMedicineName() {
		return medicineName;
	}
	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Medicine [medicineName=" + medicineName + ", price=" + price + "]";
	}
	
	
}