package com.maktaba.model;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Favorite{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	@Column(unique=true)
	private String title;

	@ManyToMany
	@JoinTable(
		name="favorite_books",
		joinColumns = {@JoinColumn(name="book_id")},
		inverseJoinColumns = {@JoinColumn(name="favorite_id")},
		uniqueConstraints=@UniqueConstraint(
			columnNames={"book_id", "favorite_id"})
	)
	private List<Book> books;

	public Favorite(){
		this.books = new ArrayList<>();
	}

	public Favorite(String title){
		this.title = title;
		this.books = new ArrayList<>();
	}

	public Favorite(String title, List<Book> books){
		this.title = title;
		this.books = books;
	}
	
	public Favorite(Long id, String title, List<Book> books){
		this.id    = id;
		this.title = title;
		this.books = books;
	}




	public Long getId() { return this.id; }
	public void setId(Long id) { this.id = id; }
	public String getTitle() { return this.title; }
	public void setTitle(String title) { this.title = title; }
	public List<Book> getBooks() { return this.books; }
	public void setBooks(List<Book> books) { this.books = books; }
	public void addBook(Book book){ this.books.add(book);}

	@Override
	public String toString(){
		StringBuilder sb = new StringBuilder();

		for(Book book : books){
			sb.append(book.toString());
		}

		return "{" + 
			"id: " + this.id + ", " + 
			"title: " + this.title + ", " +
			"books: " + sb + 
			"}";
	}
}