package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.View;
import com.tvt21webdev2.climatechangecharts.service.ViewService;

@RestController
public class ViewController {

  private final ViewService service;

  public ViewController(final ViewService service) {
    this.service = service;
  }

  @GetMapping("/view")
  public List<View> getData(@RequestParam(defaultValue = "empty") String userId,
      @RequestParam(defaultValue = "empty") String url) {
    if (!userId.equals("empty"))
      return service.findByUserId(Long.parseLong(userId));
    if (!url.equals("empty"))
      return service.findByUrl(url);
    return service.findAll();
  }

  @PostMapping("/createview")
  public ResponseEntity<String> createView(@RequestBody View view) {
    service.saveView(view);
    return new ResponseEntity<>(view.getUrl() + " created successfully", HttpStatus.OK);
  }

}
