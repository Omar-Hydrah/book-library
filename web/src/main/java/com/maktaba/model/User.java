package com.maktaba.model;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
public class User{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	@Column(unique=true, nullable=false)
	private String username;

	@Column(nullable=false)
	private String password;

	@Column(nullable=false)
	private String firstName;

	@Column(nullable=false)
	private String lastName;
	
	public User(){

	}

	public User(String username, String password){
		this.username = username;
		this.password = password;
	}

	public User(String username, String password ,String firstName, 
		String lastName)
	{
		this.username  = username;
		this.password  = password;
		this.firstName = firstName;
		this.lastName  = lastName;
	}

	public Long getId() { return this.id; }
	public void setId(Long id) { this.id = id; }
	public String getUsername() { return this.username; }
	public void setUsername(String username) { this.username = username; }
	public String getPassword() { return this.password; }
	public void setPassword(String password) { this.password = password; }
	public String getFirstName() { return this.firstName; }
	public void setFirstName(String firstName) { this.firstName = firstName; }
	public String getLastName() { return this.lastName; }
	public void setLastName(String lastName) { this.lastName = lastName; }

	@Override
	public String toString(){
		return 
			"{ " +
				"id: " + this.id + "," +
				"username: "  + this.username  + ", " + 
				"firstName: " + this.firstName + ", " +
				"lastName: "  + this.lastName  + ", " + 
			"}";
	}
}