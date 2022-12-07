package com.tvt21webdev2.climatechangecharts.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tvt21webdev2.climatechangecharts.service.SecurityService;
import com.tvt21webdev2.climatechangecharts.service.UserService;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class UserController {

  private final UserService userService;
  private final SecurityService securityService;

  public UserController(final UserService userService, final SecurityService securityService) {
    this.userService = userService;
    this.securityService = securityService;
  }

  @DeleteMapping("/user/delete")
  public ResponseEntity<String> deleteUser(@CookieValue(name = "token") String token) {
    //what if multiple tokens in cookies on same computer?
    String username = securityService.validateJwt(token);
    if (username == null) {
      return new ResponseEntity<>("Token not valid", HttpStatus.UNAUTHORIZED);
    }
    if (userService.existsByUsername(username)) {
      userService.deleteByUsername(username);
      return new ResponseEntity<>("User deleted", HttpStatus.OK);
    } else {
      return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }
  }
}
