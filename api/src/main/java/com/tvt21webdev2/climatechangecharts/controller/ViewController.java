package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tvt21webdev2.climatechangecharts.data.View;
import com.tvt21webdev2.climatechangecharts.service.ViewService;

@CrossOrigin
@RestController
public class ViewController {

  private final ViewService service;

  public ViewController(final ViewService service) {
    this.service = service;
  }

  @GetMapping("/view")
  public List<View> getData(@RequestParam(defaultValue = "empty") String userId) {
    if (!userId.equals("empty"))
      return service.findByUserId(Long.parseLong(userId));
    return service.findAll();
  }

  @PostMapping("/view/create")
  public ResponseEntity<String> createView(@RequestBody View view) {
    service.saveView(view);
    return new ResponseEntity<>(view.getUrl() + " created successfully", HttpStatus.OK);
  }

  @PostMapping("/view/delete")
  public ResponseEntity<String> deleteView(@RequestParam(defaultValue = "empty") String id) {
    
    service.deleteById(Long.parseLong(id));
    return new ResponseEntity<>("View deleted", HttpStatus.OK);
  }

  @GetMapping("/{url}")
  @ResponseBody
  public List<View> getView(@PathVariable String url) {
    return service.findByUrl(url);
  }
}
