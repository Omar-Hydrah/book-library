package com.maktaba.repo;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.maktaba.model.Author;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
	
	Author save(Author author);

	List<Author> findByName(String name);

	void deleteByName(String name);
}