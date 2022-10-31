package com.ruchitha.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ruchitha.login.repository.UserRepository;


@Component
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;

	public boolean isValid(String username, String password) {

		return userRepository.validate(username, password);
	}

	public boolean register(String name, String empid, String username, String phone, String password) {
		if (userRepository.isExist(username, empid))
			return false;
		else {
			userRepository.insertUser(name, empid, username, phone, password);
		}
		return true;
	}

}
