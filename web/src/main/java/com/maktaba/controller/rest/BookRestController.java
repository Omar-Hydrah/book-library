package com.maktaba.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.security.web.bind.annotation.AuthenticationPrincipal;

import java.util.Optional;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.maktaba.model.Book;
import com.maktaba.model.Author;
import com.maktaba.service.BookService;

@RestController
@RequestMapping("/api/book")
public class BookRestController{

	private static final Logger log = 
		LoggerFactory.getLogger(BookRestController.class);

	@Autowired
	private BookService bookService;

	@PostMapping("/create")
	public Book create(@RequestBody Book book){
		log.info("\n\n" + book.toString() + "\n\n");
		return bookService.save(book);
	}

	@GetMapping("/find/{id}")
	public Book find(@PathVariable("id") Long id){
		return bookService.findById(id);
	}

	@GetMapping("/")
	public List<Book> all(){
		return bookService.findAll();
	}


}