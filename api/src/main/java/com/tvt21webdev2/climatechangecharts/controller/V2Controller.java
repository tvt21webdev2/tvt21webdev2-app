package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.V2;
import com.tvt21webdev2.climatechangecharts.service.V2Service;

@RestController
public class V2Controller {

  private final V2Service service;

  public V2Controller(final V2Service service) {
    this.service = service;
  }

  @GetMapping("/v2")
  public List<V2> getData(@RequestParam(defaultValue = "empty") String year) {
    if (!year.equals("empty"))
      return service.findDataByYear(Integer.parseInt(year));
    return service.findAll();
  }
  
}
