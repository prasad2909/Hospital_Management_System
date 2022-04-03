package com.sunbeam.entities;

public class Role {
	private String role;
	
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Role(String role) {
		super();
		this.role = role;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "Role [role=" + role + "]";
	}

}
