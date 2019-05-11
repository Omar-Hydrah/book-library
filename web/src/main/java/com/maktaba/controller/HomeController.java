package com.maktaba.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.validation.BindingResult;
import org.springframework.ui.Model;


import javax.validation.Valid;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.ServletException;


import com.maktaba.service.UserService;
import com.maktaba.model.User;

@Controller
@RequestMapping("/")
public class HomeController{

	@Autowired
	private UserService userService;

	@GetMapping("/")
	public String index(){
		return "index";
	}

	@GetMapping("/login")
	public String login(){
		return "login";
	}

	@GetMapping("/register")
	public String register(Model model){
		model.addAttribute(new User());

		return "register";
	}

	@PostMapping("/register")
	public String register(@Valid @ModelAttribute User newUser,
		BindingResult result, HttpServletRequest request)
	{
		if(result.hasErrors()){
			return "register";
		}

		User user = userService.register(newUser);

		if(user != null){
			try{
				request.login(user.getUsername(), user.getPassword());

			}catch(ServletException e){

				return "redirect:/login";
			}

			return "redirect:/user/";
		}else{
			return "register";
		}
	}


}