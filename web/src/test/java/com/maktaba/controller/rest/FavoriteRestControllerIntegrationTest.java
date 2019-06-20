package com.maktaba.controller.rest;

import org.springframework.context.annotation.Bean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.mockito.Mockito;
import static org.mockito.Matchers.anyString;
import static org.mockito.Matchers.anyLong;
import static org.mockito.Matchers.any;

import org.junit.runner.RunWith;
import org.junit.Test;
import org.junit.Before;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;

import java.util.Optional;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

import com.maktaba.service.FavoriteService;
import com.maktaba.model.Favorite;
import com.maktaba.model.Book;

@RunWith(SpringRunner.class)
@WebMvcTest(FavoriteRestController.class)
@AutoConfigureMockMvc(secure=false)
@ActiveProfiles("test")
public class FavoriteRestControllerIntegrationTest{
	
	@Autowired
	private MockMvc mvc;

	@MockBean
	private FavoriteService favoriteService;

	@Test
	public void whenCreateFavorite_thenReturnCreatedFavorite()throws Exception{

		Favorite favorite = new Favorite("Chemistry books");

		Mockito.when(favoriteService.save(any(Favorite.class)))
			.thenReturn(favorite);

		mvc.perform(
			post("/api/favorite/create")
			.param("title", favorite.getTitle())
			.contentType(MediaType.APPLICATION_JSON)
			)
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.title", is(favorite.getTitle())));
	}

	@Test
	public void givenFavorites_whenFindAll_thenReturnFavoriteList()
		throws Exception
	{
		Favorite favorite = new Favorite("Chemistry books");
		List<Favorite> list = new ArrayList<>(Arrays.asList(favorite));

		Mockito.when(favoriteService.findAll()).thenReturn(list);

		mvc.perform(
			get("/api/favorite/all").contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(1)))
		.andExpect(jsonPath("$[0].title", is(favorite.getTitle())));
	}

	@Test
	public void givenFavorite_whenFindById_thenReturnFavorite()
		throws Exception
	{
		Favorite favorite = new Favorite("Chemistry books");

		Mockito.when(favoriteService.findById(anyLong()))
			.thenReturn(favorite);


		mvc.perform(
			get("/api/favorite/1").contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.title", is(favorite.getTitle())));
	}

	@Test
	public void whenAddBookToFavorite_thenReturnFavorite() throws Exception{
		Favorite favorite = new Favorite("Chemistry books");
		Book     book     = new Book("Chemistry", "Introduction to chemistry");
		favorite.setBooks(Arrays.asList(book));

		Mockito.when(favoriteService.addBook(any(Long.class), any(Book.class)))
			.thenReturn(favorite);

		mvc.perform(
			post("/api/favorite/1/add-book")
			.param("title", book.getTitle())
			.contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.books[0].title", is(book.getTitle())));
	}


	@Test
	public void givenFavoriteList_whenSearchByTitle_thenReturnFavoriteList()
		throws Exception
	{
		Favorite favorite = new Favorite("Chemistry books");

		Mockito.when(favoriteService.findByTitle(anyString()))
			.thenReturn(favorite);

		mvc.perform(
			get("/api/favorite/search/title=" + favorite.getTitle())
			.contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.title", is(favorite.getTitle())));
	}
}