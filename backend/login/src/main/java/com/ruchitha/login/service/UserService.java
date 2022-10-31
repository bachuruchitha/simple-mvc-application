package com.ruchitha.login.service;

import org.springframework.stereotype.Component;

@Component
public interface UserService {
	public boolean isValid(String username, String password);

	public boolean register(String name, String empid, String username, String phone, String password);
}
