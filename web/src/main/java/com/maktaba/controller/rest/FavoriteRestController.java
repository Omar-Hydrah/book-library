package com.maktaba.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.security.web.bind.annotation.AuthenticationPrincipal;

import java.util.List;

import com.maktaba.service.FavoriteService;
import com.maktaba.model.Favorite;
import com.maktaba.model.Book;

@RestController
@RequestMapping("/api/favorite")
public class FavoriteRestController{

	@Autowired
	private FavoriteService favoriteService;

	@GetMapping("/all")
	public List<Favorite> all(){
		return favoriteService.findAll();
	}


	@PostMapping("/create")
	public Favorite create(String title){
		Favorite list = new Favorite(title);
		return favoriteService.save(list);
	}

	@GetMapping("/{id}")
	public Favorite findById(@PathVariable("id") Long id){

		return favoriteService.findById(id);
	}

	@PostMapping("/{id}/add-book")	
	public Favorite addBook(@PathVariable("id") Long id, Book book){

		return favoriteService.addBook(id, book);
	}

	@GetMapping("/search/{title}")
	public Favorite searchByTitle(@PathVariable("title") String title){
		return favoriteService.findByTitle(title);
	}
}