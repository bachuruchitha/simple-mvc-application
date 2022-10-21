package userlogin.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import userlogin.dao.LoginDao;

@Controller
public class MainController {
	
	@Autowired
	LoginDao loginDao;
	@GetMapping("/login")
	public String login() {
		System.out.println("Login url");
		return "login";
	}
	
	@PostMapping("/checkLogin")
	public String logincheck(@RequestParam String username,@RequestParam String password,HttpSession session) {
		System.out.println("Checking Login");
		boolean isValid=loginDao.validate(username, password);
		if(isValid) {
			session.setAttribute("username", username);
			return "welcome";
		}
		else return "invalidLogin";
	}
	
	@GetMapping("/welcome")
	public String welcome(HttpSession session) {
		if(session.getAttribute("username")==null) {
			return "login";
		}
		return "welcome";
	}
	
	@GetMapping("/register")
	public String register() {
		System.out.println("Registration url");
		return "register";
	}
	@PostMapping("/doRegister")
	public String register(@RequestParam String name,@RequestParam String empid,@RequestParam String username,@RequestParam String phone,@RequestParam String password) {
		System.out.println("Registration url");
		boolean exist=loginDao.isExist(username,empid);
		if(exist) {
			System.out.println("user exists");
			return "alreadyExist";
		}
		loginDao.insertUser(name, empid, username, phone, password);
		return "registered";
	}
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.removeAttribute("username");
		return "login";
	}

}
