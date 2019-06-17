package com.maktaba.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.security.web.bind.annotation.AuthenticationPrincipal;

import java.util.List;

import com.maktaba.model.Author;
import com.maktaba.service.AuthorService;


@RestController
@RequestMapping("/api/author")
public class AuthorRestController{

	@Autowired
	private AuthorService authorService;

	@PostMapping("/create")
	public Author create(Author author){
		return authorService.save(author);
	}

	@GetMapping("/search/{authorName}")
	public List<Author> search(@PathVariable("authorName") String name){
		return authorService.findByNameLike(name);
	}
}