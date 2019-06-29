package com.maktaba.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.security.web.bind.annotation.AuthenticationPrincipal;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.maktaba.service.FavoriteService;
import com.maktaba.model.Favorite;
import com.maktaba.model.Book;

@RestController
@RequestMapping("/api/favorite")
public class FavoriteRestController{

	private static final Logger log = 
		LoggerFactory.getLogger(FavoriteRestController.class);

	@Autowired
	private FavoriteService favoriteService;

	@GetMapping("/all")
	public List<Favorite> all(){
		return favoriteService.findAll();
	}


	@PostMapping("/create")
	public Favorite create(@RequestBody String title){
		log.info("\n\n" + title + "\n\n");
		Favorite list = new Favorite(title);
		return favoriteService.save(list);
	}

	@GetMapping("/find/{id}")
	public Favorite findById(@PathVariable("id") Long id){

		return favoriteService.findById(id);
	}

	@PostMapping("/find/{id}/add-book")	
	public Favorite addBook(@PathVariable("id") Long id, 
		@RequestBody Book book)
	{
		log.info("\n\n add " + book.toString() + " to " + id + "\n\n" );
		return favoriteService.addBook(id, book);
	}

	@GetMapping("/search/{title}")
	public Favorite searchByTitle(@PathVariable("title") String title){
		return favoriteService.findByTitle(title);
	}
}