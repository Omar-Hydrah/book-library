package com.maktaba.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.maktaba.model.User;
import com.maktaba.model.MaktabaUserDetails;
import com.maktaba.repo.UserRepository;

@Service
public class MaktabaUserDetailsService  implements UserDetailsService{
	
    @Autowired
    private UserRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws 
    	UsernameNotFoundException
	{
		User user = this.userRepo.findByUsername(username);

		if(user == null){
			throw new UsernameNotFoundException("Could not find: " + username);
		}

		return new MaktabaUserDetails(user);
    }
}
