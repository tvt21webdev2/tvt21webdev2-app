package com.tvt21webdev2.climatechangecharts.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.User;
import com.tvt21webdev2.climatechangecharts.service.SecurityService;
import com.tvt21webdev2.climatechangecharts.service.UserService;

@RestController
public class SecurityController {

  private final SecurityService service;

  public SecurityController(final UserService userService, final SecurityService service) {
    this.service = service;
  }

  @PostMapping("/register")
  public ResponseEntity<String> register(@RequestParam String username, @RequestParam String password) {
    User u = service.register(username, password);

    if (u == null)
      return new ResponseEntity<>("Username or password not valid", HttpStatus.BAD_REQUEST);
    return new ResponseEntity<>(u.getUsername() + " registered succesfully", HttpStatus.OK);
  }

  @PostMapping("/login")
  public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
    User user = service.checkIfUserExists(username);
    if (user != null) {
      if (!service.validateUser(user, password)) {
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    String token = service.generateJwt(user);
    return new ResponseEntity<>(token, HttpStatus.OK);
  }

}
