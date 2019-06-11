package com.maktaba.service;

import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.hamcrest.CoreMatchers.hasItem;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.contains;

import org.junit.runner.RunWith;
import org.junit.Before;
import org.junit.Test;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.ArrayList;

import org.mockito.Mockito;

import com.maktaba.model.Book;
import com.maktaba.model.Author;
import com.maktaba.repo.BookRepository;

@RunWith(SpringRunner.class)
public class BookServiceIntegrationTest{

	private static final Logger logger = LoggerFactory.getLogger(BookServiceIntegrationTest.class);

	@TestConfiguration
	static class BookServiceTestContextConfiguration{
		@Bean
		public BookService bookService(){
			return new BookService();
		}
	}

	@Autowired
	private BookService bookService;

	@MockBean
	private BookRepository bookRepository;

	@Before
	public void setUp(){
		Book book = new Book("Physics", "Introduction to Physics");
		List<Book> bookList = new ArrayList<>(); 
		bookList.add(book);

		Mockito.when(bookRepository.findByTitle(book.getTitle()))
			.thenReturn(bookList);
	}

	@Test
	public void whenFindBookByTitle_thenReturnBookList(){
		Book book = new Book("Physics", "Introduction to Physics");
		List<Book> foundList = bookService.findByTitle(book.getTitle());

		logger.info("\n\n" + foundList.toString() + "\n\n" );

		assertThat(foundList.get(0).getTitle(), is(book.getTitle()));
	}
}