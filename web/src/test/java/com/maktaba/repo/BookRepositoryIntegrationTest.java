package com.maktaba.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.ActiveProfiles;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.hasItems;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.hasSize;

import org.junit.runner.RunWith;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

import com.maktaba.model.Book;
import com.maktaba.model.Author;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
@DataJpaTest
public class BookRepositoryIntegrationTest{
	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private BookRepository bookRepository;

	private Author author = new Author("Mark Anthony");
	private Long authorId;


	@Before
	public void setup(){
		authorId = entityManager.persistAndGetId(this.author, Long.class);
		entityManager.flush();
	}

	@Test
	public void whenFindByTitle_thenReturnBook(){


		Book book = new Book("Physics", "Introduction to Physics");
		book.setAuthor(this.author);
		entityManager.persist(book);
		entityManager.flush();

		// when
		List<Book> foundList = bookRepository.findByTitle(book.getTitle());

		// then
		assertThat(foundList, hasItem(book));
	}

	@Test
	public void whenFindByAuthorId_thenReturnBook(){
		Book book1 = new Book("Chemistry", "Introduction to Chemistry");
		book1.setAuthor(this.author);

		Book book2 = new Book("Biology", "Introduction to Biology");
		book2.setAuthor(this.author);

		entityManager.persist(book1);
		entityManager.persist(book2);
		entityManager.flush();

		// when
		List<Book> foundList = bookRepository.findByAuthorId(authorId);

		// then
		assertThat(foundList, hasItems(book1, book2));
		assertThat(foundList, hasSize(2)); 
	}

	@Test
	public void whenFindAll_thenReturnBookList(){
		Book book1 = new Book("Chemistry", "Introduction to Chemistry");
		book1.setAuthor(this.author);

		Book book2 = new Book("Biology", "Introduction to Biology");
		book2.setAuthor(this.author);

		entityManager.persist(book1);
		entityManager.persist(book2);
		entityManager.flush();

		// when
		List<Book> foundList = bookRepository.findAll();

		// then 
		assertThat(foundList, hasItems(book1, book2));
		assertThat(foundList, hasSize(2));
	}
}