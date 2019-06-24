package com.maktaba.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.security.web.bind.annotation.AuthenticationPrincipal;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.maktaba.model.Author;
import com.maktaba.service.AuthorService;


@RestController
@RequestMapping("/api/author")
public class AuthorRestController{

	private static final Logger log = 
		LoggerFactory.getLogger(AuthorRestController.class);

	@Autowired
	private AuthorService authorService;

	@GetMapping({"/all", "/"})
	public List<Author> all(){
		return authorService.findAll();
	}

	@GetMapping("/{id}")
	public Author findById(@PathVariable("id") Long id){
		return authorService.findById(id);
	}

	@PostMapping("/create")
	public Author create(Author author){
		log.info("\n\n" + author.toString() + "\n\n");
		return authorService.save(author);
	}

	@GetMapping("/search/{authorName}")
	public List<Author> search(@PathVariable("authorName") String name){
		return authorService.findByNameLike(name);
	}
}