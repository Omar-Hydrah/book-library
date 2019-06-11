package com.maktaba.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.security.web.bind.annotation.AuthenticationPrincipal;

import java.util.Optional;
import java.util.List;

import com.maktaba.model.Book;
import com.maktaba.model.Author;
import com.maktaba.service.BookService;

@RestController
@RequestMapping("/api/book")
public class BookRestController{

	@Autowired
	private BookService bookService;

	@PostMapping("/create")
	public Book create(Book book){
		return bookService.save(book);
	}

	@GetMapping("/{id}")
	public Book find(@PathVariable("id") Long id){
		return bookService.findById(id);
	}

	@GetMapping("/")
	public List<Book> all(){
		return bookService.findAll();
	}


}