package com.maktaba.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Book{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	@Column(nullable=false)
	private String title;

	@Column
	private String description;

	@ManyToOne
	@JoinColumn(name="author_id")
	private Author author;

	public Book(){

	}

	public Book(String title, String description){
		this.title = title;
		this.description = description;
	}


	public Long getId() { return this.id; }
	public void setId(Long id) { this.id = id; }
	public String getTitle() { return this.title; }
	public void setTitle(String title) { this.title = title; }
	public Author getAuthor(){return this.author;}
	public void setAuthor(Author author){this.author = author;}
	public String getDescription() { return this.description; }
	public void setDescription(String description) { this.description = description; }

	@Override
	public String toString(){
		return "{" +
			"title: " + title + ", " +
			"description: " + description + ", " +
			"}";
	}
}