package com.tvt21webdev2.climatechangecharts.controller;

import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.V4;
import com.tvt21webdev2.climatechangecharts.service.V4Service;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class V4Controller {
  
  private final V4Service service;

  public V4Controller(final V4Service service) {
    this.service = service;
  }

  @GetMapping("/v4")
  public List<V4> getData(@RequestParam(defaultValue = "empty") String set) {
    if (!set.equals("empty"))
      return service.findBySetOrderByYear(Integer.parseInt(set));
    return service.findAll();
  }
  
}
