package com.maktaba.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import com.maktaba.model.Author;
import com.maktaba.repo.AuthorRepository;

@Service
public class AuthorService{

	@Autowired
	private AuthorRepository authorRepo;

	public Author saveAuthor(Author author){
		return authorRepo.save(author);
	}

	public List<Author> findByName(String name){
		return authorRepo.findByName(name);
	}

	public void deleteByName(String name){
		authorRepo.deleteByName(name);
	}
}