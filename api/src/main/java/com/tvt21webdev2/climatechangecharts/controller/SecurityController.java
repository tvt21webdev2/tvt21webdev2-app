package com.tvt21webdev2.climatechangecharts.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tvt21webdev2.climatechangecharts.data.User;
import com.tvt21webdev2.climatechangecharts.service.SecurityService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class SecurityController {

  private final SecurityService service;

  public SecurityController(final SecurityService service) {
    this.service = service;
  }

  @PostMapping("/register")
  public ResponseEntity<String> saveUser(@RequestBody Map<String, String> userMap) {
    User user = new User(userMap.get("username"), userMap.get("password"));
    Pattern passwordRegex = Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$");
    Pattern usernameRegex = Pattern.compile("^[a-zA-Z0-9]{4,16}$");
    Matcher passwordMatcher = passwordRegex.matcher(user.getPassword());
    Matcher usernameMatcher = usernameRegex.matcher(user.getUsername());
    if (service.checkIfUserExists(user)) {
      return new ResponseEntity<>("name already exists", HttpStatus.BAD_REQUEST);
    }
    if (!usernameMatcher.find()) {
      return new ResponseEntity<>("username invalid", HttpStatus.BAD_REQUEST);
    }
    if (!passwordMatcher.find()) {
      return new ResponseEntity<>("password invalid", HttpStatus.BAD_REQUEST);
    }
    if (!user.getPassword().equals(userMap.get("passwordAgain"))) {
      return new ResponseEntity<>("not matching", HttpStatus.BAD_REQUEST);
    }
    service.saveUser(user);
    return new ResponseEntity<>(user.getUsername() + " registered successfully", HttpStatus.CREATED);
  }

  @PostMapping("/login")
  public ResponseEntity<String> login(@RequestBody User user, HttpServletResponse response) {
    if (service.checkIfUserExists(user)) {
      if (!service.validateUser(user)) {
        return new ResponseEntity<>("wrong password", HttpStatus.UNAUTHORIZED);
      }
    } else {
      return new ResponseEntity<>("user doesn't exist", HttpStatus.NOT_FOUND);
    }

    String token = service.generateJwt(user);

    Cookie cookie = new Cookie("token", token);

    cookie.setMaxAge(7 * 24 * 60 * 60);
//    cookie.setSecure(true);
    cookie.setHttpOnly(true);
    cookie.setPath("/");
    response.addCookie(cookie);
    return new ResponseEntity<>(user.getUsername(), HttpStatus.OK);
  }

  @GetMapping("/logout")
  public ResponseEntity<String> logout(HttpServletResponse response) {
    Cookie cookie = new Cookie("token", "");
    cookie.setMaxAge(0);
    response.addCookie(cookie);
    return new ResponseEntity<>("logged out successfully", HttpStatus.OK);
  }

}
