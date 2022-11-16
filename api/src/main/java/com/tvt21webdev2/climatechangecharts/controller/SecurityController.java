package com.tvt21webdev2.climatechangecharts.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
  public ResponseEntity<String> saveUser(@RequestBody User user) {

    User userAfterSave = service.saveUser(user);

    if (userAfterSave == null)
      return new ResponseEntity<>("Username already exists", HttpStatus.BAD_REQUEST);
    return new ResponseEntity<>(userAfterSave.getUsername() + " registered successfully", HttpStatus.CREATED);
  }

  @PostMapping("/login")
  public ResponseEntity<String> login(@RequestBody User paramUser) {
    User user = service.checkIfUserExists(paramUser.getUsername());
    if (user != null) {
      if (!service.validateUser(user, paramUser.getPassword())) {
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    String token = service.generateJwt(user);
    return new ResponseEntity<>(token, HttpStatus.OK);
  }

}
