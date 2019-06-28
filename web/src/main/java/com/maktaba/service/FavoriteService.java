package com.maktaba.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

import com.maktaba.model.Favorite;
import com.maktaba.model.Book;
import com.maktaba.repo.FavoriteRepository;
import com.maktaba.repo.BookRepository;


@Service
public class FavoriteService {
	
	@Autowired
	private FavoriteRepository repo;

	@Autowired
	private BookRepository bookRepo;

	public Favorite save(Favorite favorite){
		return repo.save(favorite);
	}

	public Favorite findById(Long id){
		Optional<Favorite> optional = repo.findById(id);
		if(optional.isPresent()){
			return optional.get();
		}else{
			return null;
		}
	}

	public Favorite findByTitle(String title){
		return repo.findByTitle(title);
	}

	public List<Favorite> findAll(){
		return repo.findAll();
	}

	public void deleteByTitle(String title){
		repo.deleteByTitle(title);
	}


	public Favorite addBook(Long favoriteId, Book book){
		Optional<Favorite> optional = repo.findById(favoriteId);
		if(optional.isPresent()){

			Favorite favorite = optional.get();
			favorite.addBook(book);

			return repo.save(favorite);

		}else{
			return null;
		}
	}

	public Favorite addBook(Long favoriteId, Long bookId){
		Optional<Book> bookOptional         = bookRepo.findById(bookId);
		Optional<Favorite> favoriteOptional = repo.findById(favoriteId); 

		if(!bookOptional.isPresent() || !favoriteOptional.isPresent()){
			return null;
		}else{
			Book     book     = bookOptional.get();
			Favorite favorite = favoriteOptional.get();

			favorite.addBook(book);

			return repo.save(favorite);
		}
	}
}
