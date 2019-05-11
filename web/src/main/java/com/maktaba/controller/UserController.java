package com.maktaba.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.security.web.bind.annotation.AuthenticationPrincipal;

import com.maktaba.model.User;

@Controller
@RequestMapping("/user")
public class UserController{

	@GetMapping("/")
	public String index(@AuthenticationPrincipal User principal ){
		if(principal == null){
			return "redirect:/login";
		}else{
			return "/user/profile";
		}
	}
}