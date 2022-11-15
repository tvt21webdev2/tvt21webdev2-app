package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.User;
import com.tvt21webdev2.climatechangecharts.service.UserService;

@RestController
public class UserController {

  private final UserService service;

  public UserController(final UserService service) {
    this.service = service;
  }

  @GetMapping("/user")
  public List<User> getData(@RequestParam(defaultValue = "empty") String username) {
    if (!username.equals("empty"))
      return service.findByUsername(username);
    return service.findAll();
  }

}
