package com.tvt21webdev2.climatechangecharts.controller;

import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.V9;
import com.tvt21webdev2.climatechangecharts.service.V9Service;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class V9Controller {

  private final V9Service service;

  public V9Controller(final V9Service service) {
    this.service = service;
  }

  @GetMapping("/v9")
  public List<V9> getData(@RequestParam(defaultValue = "empty") String sector) {
    if (!sector.equals("empty"))
      return service.findBySector(sector);
    return service.findAll();
  }

}
