package com.maktaba.repo;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.maktaba.model.Book;
import com.maktaba.model.Author;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
	
	Book save(Book book);
	List<Book> findAll();
	List<Book> findByTitle(String title);
	List<Book> findByAuthorId(Long authorId);
	List<Book> findByAuthorId(Author author);

	void deleteByAuthorId(Long authorId);
	void deleteByAuthorId(Author author);
}