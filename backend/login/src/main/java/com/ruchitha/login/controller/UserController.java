package com.ruchitha.login.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ruchitha.login.model.User;
import com.ruchitha.login.service.UserService;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class UserController {

	@Autowired
	UserService userService;
	@PostMapping("/checkLogin")
	public ResponseEntity<Boolean> logincheck(@RequestBody User user, HttpSession session) {
		System.out.println("Checking Login");
		boolean isValid = userService.isValid(user.getUsername(), user.getPassword());
		if (isValid) {
			return new ResponseEntity<>(true, HttpStatus.OK);
		} else
			return new ResponseEntity<>(false, HttpStatus.OK);
	}




	@PostMapping("/doRegister")
	public ResponseEntity<Boolean> register(@RequestBody User user) {
		boolean insert = userService.register(user.getName(), user.getEmpid(), user.getUsername(), user.getPhone(),
				user.getPassword());
		if (insert) {
			return new ResponseEntity<>(true, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(false, HttpStatus.OK);
		}
	}

}