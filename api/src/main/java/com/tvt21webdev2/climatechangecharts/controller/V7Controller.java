package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.V7;
import com.tvt21webdev2.climatechangecharts.service.V7Service;

@CrossOrigin
@RestController
public class V7Controller {
  
  private final V7Service service;

  public V7Controller(final V7Service service) {
    this.service = service;
  }

  @GetMapping("/v7")
  public List<V7> getData(@RequestParam(defaultValue = "empty") String yearBp) {
    if (!yearBp.equals("empty"))
      return service.findByYearBp(Integer.parseInt(yearBp));
    return service.findAll();
  }
  
}
