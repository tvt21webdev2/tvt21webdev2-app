package com.tvt21webdev2.climatechangecharts.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.V9;
import com.tvt21webdev2.climatechangecharts.service.V9Service;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin
@RestController
public class V9Controller {

  private final V9Service service;

  public V9Controller(final V9Service service) {
    this.service = service;
  }

  @GetMapping("/v9")
  public List<V9> getData() {
    return service.findAll();
  }

}
