package com.tvt21webdev2.climatechangecharts.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.User;
import com.tvt21webdev2.climatechangecharts.service.SecurityService;

@RestController
public class SecurityController {
  
  private final SecurityService service;

  public SecurityController(final SecurityService service) {
    this.service = service;
  }

  @PostMapping("/register")
  public ResponseEntity<String> register(@RequestParam String username, @RequestParam String password) {
    User u = service.register(username, password);
    return new ResponseEntity<>(u.getUsername() + "registered", HttpStatus.OK);
  }

  @PostMapping("/login")
  public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
    String token = service.login(username, password);

    if (token == null)
      return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      
    return new ResponseEntity<>(token, HttpStatus.OK);
  }

}
