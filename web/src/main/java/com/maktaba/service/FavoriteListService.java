package com.maktaba.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

import com.maktaba.model.FavoriteList;
import com.maktaba.model.Book;
import com.maktaba.repo.FavoriteListRepository;


@Service
public class FavoriteListService {
	
	@Autowired
	private FavoriteListRepository repo;

	public FavoriteList save(FavoriteList favoriteList){
		return repo.save(favoriteList);
	}

	public FavoriteList findById(Long id){
		Optional<FavoriteList> optional = repo.findById(id);
		if(optional.isPresent()){
			return optional.get();
		}else{
			return null;
		}
	}

	public FavoriteList findByTitle(String title){
		return repo.findByTitle(title);
	}

	public List<FavoriteList> findAll(){
		return repo.findAll();
	}

	public void deleteByTitle(String title){
		repo.deleteByTitle(title);
	}


	public FavoriteList addBook(Long favoriteListId, Book book){
		Optional<FavoriteList> optional = repo.findById(favoriteListId);
		if(optional.isPresent()){

			FavoriteList favoriteList = optional.get();
			favoriteList.addBook(book);

			return repo.save(favoriteList);

		}else{
			return null;
		}
	}
}
