package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.V5;
import com.tvt21webdev2.climatechangecharts.service.V5Service;

@RestController
public class V5Controller {
  
  private final V5Service service;

  public V5Controller(final V5Service service) {
    this.service = service;
  }

  @GetMapping("/v5")
  public List<V5> getData(@RequestParam(defaultValue = "empty") String airAge) {
    if (!airAge.equals("empty"))
      return service.findByAirAge(Integer.parseInt(airAge));
    return service.findAll();
  }
}
