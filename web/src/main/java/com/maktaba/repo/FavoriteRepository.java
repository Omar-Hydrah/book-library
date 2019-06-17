package com.maktaba.repo;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.maktaba.model.Favorite;

import java.util.List;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

	Favorite save(Favorite list);
	Favorite findByTitle(String title);
	List<Favorite> findAll();

	void deleteByTitle(String title);
}