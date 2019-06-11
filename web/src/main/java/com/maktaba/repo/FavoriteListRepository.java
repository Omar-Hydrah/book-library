package com.maktaba.repo;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.maktaba.model.FavoriteList;

import java.util.List;

@Repository
public interface FavoriteListRepository extends JpaRepository<FavoriteList, Long> {

	FavoriteList save(FavoriteList list);
	FavoriteList findByTitle(String title);
	List<FavoriteList> findAll();

	void deleteByTitle(String title);
}