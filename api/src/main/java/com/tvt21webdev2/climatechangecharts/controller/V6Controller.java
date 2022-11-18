package com.tvt21webdev2.climatechangecharts.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.V6;
import com.tvt21webdev2.climatechangecharts.service.V6Service;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin
@RestController
public class V6Controller {

  private final V6Service service;

  public V6Controller(final V6Service service) {
    this.service = service;
  }

  @GetMapping("/v6")
  public List<V6> getData() {
    return service.findAll();
  }

}
