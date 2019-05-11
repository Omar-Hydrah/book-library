package com.maktaba.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.maktaba.model.User;
import com.maktaba.repo.UserRepository;

@Service
public class UserService{

	@Autowired
	private UserRepository repo;

	@Autowired
	private BCryptPasswordEncoder encoder;

	public User login(String username, String password){
		User user = repo.findByUsernameAndPassword(username, password);

		return user;
	}

	public User register(User user){
		String password = user.getPassword();
		user.setPassword(encoder.encode(password));

		return repo.save(user);
	}
}