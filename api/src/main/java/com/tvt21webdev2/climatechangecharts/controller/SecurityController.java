package com.tvt21webdev2.climatechangecharts.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.User;
import com.tvt21webdev2.climatechangecharts.service.SecurityService;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@CrossOrigin
@RestController
public class SecurityController {

  private final SecurityService service;

  public SecurityController(final SecurityService service) {
    this.service = service;
  }

  @PostMapping("/register")
  public ResponseEntity<String> saveUser(@RequestBody User user) {
    Pattern passwordRegex = Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$");
    Pattern usernameRegex = Pattern.compile("^[a-zA-Z0-9]{4,16}$");
    Matcher passwordMatcher = passwordRegex.matcher(user.getPassword());
    Matcher usernameMatcher = usernameRegex.matcher(user.getUsername());
    if (!usernameMatcher.find()) {
      return new ResponseEntity<>("Username should contain 4 to 16 alphanumeric characters", HttpStatus.BAD_REQUEST);
    }
    if (service.checkIfUserExists(user)) {
      return new ResponseEntity<>("Username already exists", HttpStatus.BAD_REQUEST);
    }
    if (!passwordMatcher.find()) {
      return new ResponseEntity<>("Password should contain at least 8 characters, including one uppercase letter, one lowercase letter and one number", HttpStatus.BAD_REQUEST);
    }
    service.saveUser(user);
    return new ResponseEntity<>(user.getUsername() + " registered successfully", HttpStatus.CREATED);
  }

  @PostMapping("/login")
  public ResponseEntity<String> login(@RequestBody User user) {
    if (service.checkIfUserExists(user)) {
      if (!service.validateUser(user)) {
        return new ResponseEntity<>("Wrong password", HttpStatus.UNAUTHORIZED);
      }
    } else {
      return new ResponseEntity<>("User does not exist", HttpStatus.NOT_FOUND);
    }

    String token = service.generateJwt(user);
    return new ResponseEntity<>(token, HttpStatus.OK);
  }

}
