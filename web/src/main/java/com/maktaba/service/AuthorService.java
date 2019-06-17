package com.maktaba.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

import com.maktaba.model.Author;
import com.maktaba.repo.AuthorRepository;

@Service
public class AuthorService{

	@Autowired
	private AuthorRepository authorRepo;

	public Author save(Author author){
		return authorRepo.save(author);
	}

	public Author findById(Long id){
		Optional<Author> optional = authorRepo.findById(id);

		if(optional.isPresent()){
			return optional.get();
		}else{
			return null;
		}
	}

	public List<Author> findByName(String name){
		return authorRepo.findByName(name);
	}

	public List<Author> findByNameLike(String name){
		return authorRepo.findByNameLike(name);
	}

	public void deleteByName(String name){
		authorRepo.deleteByName(name);
	}
}