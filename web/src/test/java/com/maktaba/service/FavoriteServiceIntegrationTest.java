package com.maktaba.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import org.junit.runner.RunWith;
import org.junit.Test;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;

import static org.mockito.Matchers.anyString;
import static org.mockito.Matchers.anyLong;
import static org.mockito.Matchers.any;
import org.mockito.Mockito;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.hasSize;

import com.maktaba.model.Favorite;
import com.maktaba.model.Book;
import com.maktaba.model.Author;
import com.maktaba.repo.FavoriteRepository;

@RunWith(SpringRunner.class)
public class FavoriteServiceIntegrationTest{
	

	@TestConfiguration
	static class FavoriteServiceTestContextConfiguration{
		@Bean
		public FavoriteService bookService(){
			return new FavoriteService();
		}
	}

	@Autowired
	private FavoriteService favoriteService;

	@MockBean
	private FavoriteRepository favoriteRepo;

	@Test
	public void whenFindByTitle_thenReturnFavorite(){
		Favorite mock = new Favorite("Chemistry books");

		Mockito.when(favoriteRepo.findByTitle(anyString()))
			.thenReturn(mock);


		Favorite favorite = favoriteService.findByTitle(mock.getTitle());

		assertThat(favorite.getTitle(), is(mock.getTitle()));
	}


	@Test
	public void whenFindAll_thenReturnFavoriteList(){
		Favorite mock = new Favorite("Chemistry books");

		List<Favorite> mockList = Arrays.asList(mock);

		Mockito.when(favoriteRepo.findAll()).thenReturn(mockList);

		List<Favorite> list = favoriteService.findAll();

		assertThat(list, hasItem(mock));
		assertThat(list, hasSize(1));
	}

	@Test
	public void whenAddBockToFavorite_thenReturnFavorite(){
		Author author = new Author("Mark Anthony");

		Book mockBook = new Book("Chemistry", "Introduction to chemistry");
		mockBook.setAuthor(author);

		List<Book> books = new ArrayList<>(Arrays.asList(mockBook));
		Favorite mockFavorite = new Favorite("Science", books);
		// mockFavorite.getBooks().add(mockBook);

		Mockito.when(favoriteRepo.findById(anyLong()))
			.thenReturn(Optional.of(mockFavorite));
		Mockito.when(favoriteRepo.save(any(Favorite.class)))
			.thenReturn(mockFavorite);

		Book book = new Book("Chemistry", "Introduction to chemistry");
		book.setAuthor(author);

		Favorite favorite = favoriteService.addBook(Long.valueOf(1), book);

		assertThat(favorite.getTitle(), is(mockFavorite.getTitle())) ;
		assertThat(favorite.getBooks().get(0).getTitle(), 
			is(mockBook.getTitle()));

	}
}