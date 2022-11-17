package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.User;
import com.tvt21webdev2.climatechangecharts.service.SecurityService;
import com.tvt21webdev2.climatechangecharts.service.UserService;

@RestController
public class UserController {

  private final UserService service;
  private final SecurityService secService;

  public UserController(final UserService service, final SecurityService secService) {
    this.service = service;
    this.secService = secService;
  }

  @GetMapping("/user")
  public List<User> getData(@RequestParam(defaultValue = "empty") String username) {
    if (!username.equals("empty"))
      return service.findByUsername(username);
    return service.findAll();
  }

  @PostMapping("/user/delete")
  public ResponseEntity<String> deleteUser(@RequestBody Map<String, String> userMap) {
    if(secService.validateJwt(userMap.get("token")) == null || !secService.validateJwt(userMap.get("token")).equals(userMap.get("username"))) {
      return new ResponseEntity<>("Token/username not valid", HttpStatus.UNAUTHORIZED);
    }
    return new ResponseEntity<>("User deleted", HttpStatus.OK);
  }
}
