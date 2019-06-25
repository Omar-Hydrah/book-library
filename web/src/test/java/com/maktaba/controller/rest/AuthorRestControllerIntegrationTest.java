package com.maktaba.controller.rest;

import org.springframework.context.annotation.Bean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.mockito.Mockito;
import static org.mockito.Matchers.anyString;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.anyLong;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;

import org.junit.runner.RunWith;
import org.junit.Test;
import org.junit.Before;

import java.util.List;
import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.maktaba.service.AuthorService;
import com.maktaba.model.Author;

@ActiveProfiles("test")
@RunWith(SpringRunner.class)
@WebMvcTest(AuthorRestController.class)
@AutoConfigureMockMvc(secure=false)
public class AuthorRestControllerIntegrationTest{

	private static final Logger log = 
		LoggerFactory.getLogger(AuthorRestControllerIntegrationTest.class);

	@Autowired
	public MockMvc mvc;

	@MockBean
	private AuthorService authorService; 

	@Test
	public void givenAuthor_whenFindById_thenReturnAuthor() throws Exception{
		Author author = new Author("Mark Anthony");

		Mockito.when(authorService.findById(anyLong()))
			.thenReturn(author);

		mvc.perform(
			get("/api/author/find/" + Long.valueOf(1))
			.contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.name", is(author.getName())));
	}

	@Test
	public void givenAuthors_whenSearchAuthorByName_thenReturnAuthor() 
		throws Exception
	{
		Author author = new Author("Mark Anthony");
		List<Author> authorList = Arrays.asList(author);


		Mockito.when(authorService.findByNameLike(anyString()))
			.thenReturn(authorList);

		mvc.perform(
			get("/api/author/search/authorName=Mark")
			.contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(1)))
		.andExpect(jsonPath("$[0].name", is(author.getName())));
	}

	@Test
	public void whenCreateNewAuthor_thenReturnSavedAuthor()throws Exception{

		/*Author author = new Author("Mark Anthony");

		Mockito.when(authorService.save(any(Author.class)))
			.thenReturn(author);

		mvc.perform(
			post("/api/author/create")
			.param("name", author.getName())
			.contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.name", is(author.getName())));*/
		
	}
}