package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tvt21webdev2.climatechangecharts.data.User;
import com.tvt21webdev2.climatechangecharts.service.SecurityService;
import com.tvt21webdev2.climatechangecharts.service.UserService;

@CrossOrigin
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
    String username = userMap.get("username");
    String token = userMap.get("token");

    if (secService.validateJwt(token) == null) {
      return new ResponseEntity<>("Token not valid", HttpStatus.UNAUTHORIZED);
    }
    if (!secService.validateJwt(token).equals(username)) {
      return new ResponseEntity<>("Username not valid", HttpStatus.UNAUTHORIZED);
    }
    if (service.existsByUsername(username)) {
      service.deleteByUsername(username);
      return new ResponseEntity<>("User deleted", HttpStatus.OK);
    } else {
      return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }
  }
}
