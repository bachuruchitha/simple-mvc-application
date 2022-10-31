package com.ruchitha.login.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepositoryImpl implements UserRepository {

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public boolean validate(String username, String password) {
		int count = jdbcTemplate.queryForObject("select count(*) from registeredUsers where username=? and password=?",
				Integer.class, username, password);
		return count == 1;
	}

	@Override
	public int insertUser(String name, String empid, String username, String phone, String password) {
		int inserted = jdbcTemplate.update("insert into registeredUsers values(?,?,?,?, ?)", name, empid, username,
				phone, password);
		return inserted;
	}

	@Override
	public boolean isExist(String username, String empid) {
		int count = jdbcTemplate.queryForObject("select count(*) from registeredUsers where username=? or empid=?",
				Integer.class, username, empid);
		return count >= 1;
	}

}
