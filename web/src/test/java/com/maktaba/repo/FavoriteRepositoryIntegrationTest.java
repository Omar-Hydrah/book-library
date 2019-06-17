package com.maktaba.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.hasSize;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.util.List;

import com.maktaba.model.Favorite;
import com.maktaba.model.Book;
import com.maktaba.repo.FavoriteRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
public class FavoriteRepositoryIntegrationTest{
	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private FavoriteRepository favoriteRepo;

	@Test
	public void givenFavorite_whenFindByTitle_thenReturnFavorite(){
		Favorite favorite = new Favorite("Chemistry");

		entityManager.persist(favorite);
		entityManager.flush();

		// when
		Favorite found = favoriteRepo.findByTitle(favorite.getTitle());

		// then
		assertThat(found.getTitle(), is(favorite.getTitle()));
	}

	@Test
	public void givenFavoriteList_whenFindAll_thenReturnFavoriteList(){
		Favorite favorite = new Favorite("Chemistry");

		entityManager.persist(favorite);
		entityManager.flush();

		// when
		List<Favorite> foundList = favoriteRepo.findAll();

		// then
		assertThat(foundList, hasSize(1));
		assertThat(foundList, hasItem(favorite));
	}
}