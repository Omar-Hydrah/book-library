package com.maktaba.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;

import org.junit.runner.RunWith;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

import com.maktaba.model.Author;


@RunWith(SpringRunner.class)
@DataJpaTest
public class AuthorRepositoryIntegrationTest{

	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private AuthorRepository authorRepo;


	@Test
	public void whenFindByName_thenReturnAuthorList(){
		Author author = new Author("Mark Anthony");

		entityManager.persist(author);
		entityManager.flush();

		List<Author> foundList = authorRepo.findByName(author.getName());

		assertThat(foundList, hasSize(1));
		assertThat(foundList, hasItem(author));

	}

}