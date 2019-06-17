package com.maktaba.service;

import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;

import org.junit.runner.RunWith;
import org.junit.Test;
import org.junit.Before;

import org.mockito.Mockito;
import static org.mockito.Matchers.anyLong;
import static org.mockito.Matchers.anyString;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

import com.maktaba.model.Author;
import com.maktaba.repo.AuthorRepository;


@RunWith(SpringRunner.class)
public class AuthorServiceIntegrationTest {
	

	@TestConfiguration
	static class AuthorServiceTestContextConfiguration{
		@Bean
		public AuthorService authorService(){
			return new AuthorService();
		}
	}

	@Autowired
	private AuthorService authorService;

	@MockBean
	private AuthorRepository authorRepository;


	@Test
	public void whenFindAuthorById_thenReturnAuthor(){
		Author authorMock = new Author("Mark Anthony");

		// setup
		Mockito.when(authorRepository.findById(anyLong()))
			.thenReturn(Optional.of(authorMock));


		// when
		Author author = authorService.findById(Long.valueOf(1));

		// then
		assertThat(author.getName(), is(authorMock.getName()));
	}

	@Test
	public void whenFindAuthorByName_thenReturnAuthor(){
		Author authorMock = new Author("Octavian");

		List<Author> listMock = new ArrayList<>();
		listMock.add(authorMock);

		Mockito.when(authorRepository.findByName("Octavian"))
			.thenReturn(listMock);


		List<Author> foundList = authorService.findByName("Octavian");

		assertThat(foundList, hasSize(1));
		assertThat(foundList, hasItem(authorMock));
	}

}