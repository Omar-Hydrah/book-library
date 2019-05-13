package com.maktaba.model;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToMany;
import javax.persistence.CascadeType;

import java.util.List;

@Entity
public class Author{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	@Column(nullable=false, unique=true)
	private String name;

	@OneToMany(mappedBy="author", cascade=CascadeType.ALL)
	private List<Book> books;

	public Author(){

	}

	public Author(String name){
		this.name = name;
	}

	public Author(String name, List<Book> books){
		this.name  = name;
		this.books = books;
	}


	public Long getId() { return this.id; }
	public void setId(Long id) { this.id = id; }
	public String getName() { return this.name; }
	public void setName(String name) { this.name = name; }
	public List<Book> getBooks() { return this.books; }
	public void setBooks(List<Book> books) { this.books = books; }

	@Override
	public String toString(){

		StringBuilder sb = new StringBuilder();

		for(int i = 0; i < books.size(); i++){
			sb.append(books.get(i).toString() + ", ");
		}

		return "{" +
			"name: "   + name + ", " +
			"books: [" + sb   + "]" + 
			"}";
	}
}