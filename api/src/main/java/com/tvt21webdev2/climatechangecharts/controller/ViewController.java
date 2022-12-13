package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;

import com.tvt21webdev2.climatechangecharts.service.SecurityService;
import com.tvt21webdev2.climatechangecharts.service.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tvt21webdev2.climatechangecharts.data.View;
import com.tvt21webdev2.climatechangecharts.service.ViewService;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class ViewController {

  private final ViewService service;
  private final UserService userService;
  private final SecurityService securityService;

  public ViewController(final ViewService service, final UserService userService, final SecurityService securityService) {
    this.service = service;
    this.userService = userService;
    this.securityService = securityService;
  }

  @GetMapping("/view")
  public List<View> getUserViews(@RequestParam(defaultValue = "empty") String username) {
    if (!username.equals("empty")) {
      Long userId = userService.findByUsername(username).get(0).getId();
      return service.findByUserId(userId);
    }
    return service.findAll();
  }

  @PostMapping("/view/create")
  public ResponseEntity<String> createView(@RequestBody View view, @CookieValue(name = "token") String token) {
    String username = securityService.validateJwt(token);
    if (username == null) {
      return new ResponseEntity<>("Token not valid", HttpStatus.UNAUTHORIZED);
    }
    view.setUserId(userService.findByUsername(username).get(0).getId());
    service.saveView(view);
    return new ResponseEntity<>(view.getUrl() + " created successfully", HttpStatus.OK);
  }

  @PostMapping("/view/delete")
  public ResponseEntity<String> deleteView(@RequestParam(defaultValue = "empty") String id, @CookieValue(name = "token") String token) {
    String username = securityService.validateJwt(token);
    if (username == null) {
      return new ResponseEntity<>("Token not valid", HttpStatus.UNAUTHORIZED);
    }
    service.deleteById(Long.parseLong(id));
    return new ResponseEntity<>("View deleted", HttpStatus.OK);
  }

  @GetMapping("/view/{url}")
  @ResponseBody
  public List<View> getView(@PathVariable String url) {
    return service.findByUrl(url);
  }
}
