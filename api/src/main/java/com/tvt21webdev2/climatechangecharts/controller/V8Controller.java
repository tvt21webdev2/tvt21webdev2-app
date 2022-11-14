package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.V8;
import com.tvt21webdev2.climatechangecharts.service.V8Service;

@RestController
public class V8Controller {
  
  private final V8Service service;

  public V8Controller(final V8Service service) {
    this.service = service;
  }

  @GetMapping("/v8")
  public List<V8> getData(@RequestParam(defaultValue = "empty") String year) {
    if (!year.equals("empty"))
      return service.findByYear(Integer.parseInt(year));
    return service.findAll();
  }
}