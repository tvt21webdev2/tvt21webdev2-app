package com.tvt21webdev2.climatechangecharts.rest;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.tvt21webdev2.climatechangecharts.data.V3;
import com.tvt21webdev2.climatechangecharts.service.V3Service;

public class V3Controller {

  private final V3Service service;

  public V3Controller(V3Service service) {
    this.service = service;
  }

  @GetMapping("/v3")
  public List<V3> getData(@RequestParam(defaultValue = "empty") String type,
      @RequestParam(defaultValue = "empty") String location, @RequestParam(defaultValue = "empty") String year) {
    if (!type.equals("empty"))
      return service.findByType(type);
    return service.findAll();
  }
}
