package com.maktaba.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

import com.maktaba.model.Book;
import com.maktaba.model.Author;
import com.maktaba.repo.BookRepository;

@Service
public class BookService{

	@Autowired
	private BookRepository bookRepo;


	public Book save(Book book){
		return bookRepo.save(book);
	}

	public Book findById(Long id){
		Optional<Book> optional = bookRepo.findById(id);

		if(optional.isPresent()){
			return optional.get();
		}else{
			return null;
		}
	}

	public List<Book> findAll(){
		return bookRepo.findAll();
	}

	public List<Book> findByTitle(String title){
		return bookRepo.findByTitle(title);
	}

	public List<Book> findByAuthorId(Long authorId){
		return bookRepo.findByAuthorId(authorId);
	}
}