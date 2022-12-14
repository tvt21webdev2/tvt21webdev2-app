package com.tvt21webdev2.climatechangecharts.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.V9Sub;
import com.tvt21webdev2.climatechangecharts.service.V9SubService;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin
@RestController
public class V9SubController {

  private final V9SubService service;

  public V9SubController(final V9SubService service) {
    this.service = service;
  }

  @GetMapping("/v9sub")
  public List<V9Sub> getData(@RequestParam(defaultValue = "empty") String belongsTo) {
    if (!belongsTo.equals("empty"))
      return service.findByBelongsTo(Long.parseLong(belongsTo));
    return service.findAll();
  }

}
