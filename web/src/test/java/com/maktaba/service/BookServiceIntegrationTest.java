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
import static org.hamcrest.Matchers.hasItems;
import static org.hamcrest.Matchers.hasSize;

import org.junit.runner.RunWith;
import org.junit.Before;
import org.junit.Test;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.ArrayList;

import org.mockito.Mockito;
import static org.mockito.Matchers.anyLong;
import static org.mockito.Matchers.any;

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

	private Book book1;
	private Book book2;
	private List<Book> bookList = new ArrayList<>();

	@Before
	public void setUp(){
		this.book1 = new Book("Physics", "Introduction to Physics");
		this.book2 = new Book("Chemistry", "Introduction to Chemistry");

		this.bookList.add(book1);
		this.bookList.add(book2);

	}

	@Test
	public void whenFindBookByTitle_thenReturnBookList(){
		Book book = new Book("Physics", "Introduction to Physics");

		// mock
		Mockito.when(bookRepository.findByTitle(book.getTitle()))
			.thenReturn(this.bookList);

		// when
		List<Book> foundList = bookService.findByTitle(book.getTitle());


		// then
		assertThat(foundList.get(0).getTitle(), is(book.getTitle()));
	}

	@Test
	public void whenFindBookByAuthorId_thenReturnBookList(){

		logger.info("\n\n" + this.bookList.toString() + "\n\n" );

		// mock
		Mockito.when(bookRepository.findByAuthorId(any(Long.class)))
			.thenReturn(this.bookList);

		// when 
		List<Book> foundList = bookService.findByAuthorId(Long.valueOf(1));

		// then
		assertThat(foundList, hasItems(this.book1, this.book2));
		assertThat(foundList, hasSize(2));

	}

	@Test
	public void whenFindAllBooks_thenReturnBookList(){

		logger.info("\n\n" + this.bookList.toString() + "\n\n" );

		// mock
		Mockito.when(bookRepository.findAll())
			.thenReturn(this.bookList);

		// when
		List<Book> foundList = bookService.findAll();

		// then
		assertThat(foundList, hasItems(this.book1, this.book2));
		assertThat(foundList, hasSize(2));
	}

}