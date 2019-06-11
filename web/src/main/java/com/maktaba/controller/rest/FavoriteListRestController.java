package com.maktaba.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.security.web.bind.annotation.AuthenticationPrincipal;

import java.util.List;

import com.maktaba.service.FavoriteListService;
import com.maktaba.model.FavoriteList;
import com.maktaba.model.Book;

@RestController
@RequestMapping("/api/favorite")
public class FavoriteListRestController{

	@Autowired
	private FavoriteListService favoriteListService;

	@GetMapping("/all")
	public List<FavoriteList> all(){
		return favoriteListService.findAll();
	}


	@PostMapping("/create")
	public FavoriteList create(String title){
		FavoriteList list = new FavoriteList(title);
		return favoriteListService.save(list);
	}

	@GetMapping("/{id}")
	public FavoriteList findById(@PathVariable("id") Long id){

		return favoriteListService.findById(id);
	}

	@PostMapping("/{id}/add-book")	
	public FavoriteList addBook(@PathVariable("id") Long id, Book book){

		return favoriteListService.addBook(id, book);
	}

	@GetMapping("/search/{title}")
	public FavoriteList searchByTitle(@PathVariable("title") String title){
		return favoriteListService.findByTitle(title);
	}
}