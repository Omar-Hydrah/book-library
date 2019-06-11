package com.maktaba.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.CoreMatchers.hasItem;
import static org.hamcrest.CoreMatchers.is;

import org.junit.runner.RunWith;
import org.junit.Test;

import java.util.List;

import com.maktaba.model.Book;
import com.maktaba.model.Author;

@RunWith(SpringRunner.class)
@DataJpaTest
public class BookRepositoryIntegrationTest{
	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private BookRepository bookRepository;

	@Test
	public void whenFindByTitle_thenReturnBook(){
		// given
		Author author = new Author("Mark Anthony");
		entityManager.persist(author);
		entityManager.flush();

		Book book = new Book("Physics", "Introduction to Physics");
		book.setAuthor(author);
		entityManager.persist(book);
		entityManager.flush();

		// when
		List<Book> foundList = bookRepository.findByTitle(book.getTitle());

		// then
		assertThat(foundList, hasItem(book));
	}
}