package com.maktaba.model;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class MaktabaUserDetails extends User implements UserDetails {
    public User user;

    public MaktabaUserDetails(){

    }

    public MaktabaUserDetails(User user){
    	this.user = user;
    }

    public void setUser(User user){
    	this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities(){
    	return AuthorityUtils.createAuthorityList("ROLE_USER");
    }

    @Override
    public String getUsername(){
    	return this.user.getUsername();
    }

    @Override
    public String getPassword(){
    	return this.user.getPassword();
    }

    @Override
    public boolean isAccountNonExpired(){
    	return true;
    }

    @Override
    public boolean isAccountNonLocked(){
    	return true;
    }

    @Override
    public boolean isCredentialsNonExpired(){
    	return true;
    }

    @Override
    public boolean isEnabled(){
    	return true;
    }

}
