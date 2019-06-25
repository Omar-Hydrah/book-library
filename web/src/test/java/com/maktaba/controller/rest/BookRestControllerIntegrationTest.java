package com.maktaba.controller.rest;

import org.springframework.context.annotation.Bean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.CoreMatchers.is;

import org.junit.runner.RunWith;
import org.junit.Test;
import org.junit.Before;

import org.mockito.Mockito;
import static org.mockito.Matchers.anyInt;
import static org.mockito.Matchers.anyLong;
import static org.mockito.Matchers.any;

import java.util.List;
import java.util.Arrays;
import javax.sql.DataSource;

import com.maktaba.service.BookService;
import com.maktaba.model.Book;
import com.maktaba.model.Author;


/*@TestPropertySource(properties=
	{"spring.autoconfigure.exclude=com.maktaba.config.SecurityConfig"})*/
@ActiveProfiles("test")
@RunWith(SpringRunner.class)
@WebMvcTest(BookRestController.class)
@AutoConfigureMockMvc(secure=false)
public class BookRestControllerIntegrationTest {
	@Autowired
	private MockMvc mvc;

	@MockBean
	private BookService service;


	@Test
	public void givenBooks_whenGetBooks_thenReturnJsonArray() 
		throws Exception
	{
		Book book = new Book("Physics", "Introduction to Physics");

		List<Book> bookList = Arrays.asList(book);

		Mockito.when(service.findAll()).thenReturn(bookList);

		mvc.perform(
			get("/api/book/").contentType(MediaType.APPLICATION_JSON))
			.andExpect(status().isOk())
			.andExpect(jsonPath("$", hasSize(1)))
			.andExpect(jsonPath("$[0].title", is(book.getTitle())));
	}


	@Test
	public void whenGetBookById_thenReturnJsonArray() throws Exception{
		Book book = new Book("Physics", "Introduction to Physics");

		Mockito.when(service.findById(anyLong())).thenReturn(book);

		mvc.perform(
			get("/api/book/find/2").contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.title", is(book.getTitle())));
	}

	@Test
	public void whenPostBook_thenSaveAndReturnBookJson() throws Exception{


		Book book = new Book("Physics", "Introduction to Physics");
		Author author = new Author("Mark Anthony");
		book.setAuthor(author);

		Mockito.when(service.save(any(Book.class))).thenReturn(book);

		mvc.perform(post("/api/book/create")
			.param("title", book.getTitle())
			.param("description", book.getDescription()) 
			.param("author.name", author.getName())
			.contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.title", is(book.getTitle())))
		.andExpect(jsonPath("$.author.name", is(author.getName())));
	}
}