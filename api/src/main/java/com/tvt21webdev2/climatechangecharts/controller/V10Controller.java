package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.V10;
import com.tvt21webdev2.climatechangecharts.service.V10Service;

@RestController
public class V10Controller {

  private final V10Service service;

  public V10Controller(final V10Service service) {
    this.service = service;
  }

  @GetMapping("/v10")
  public List<V10> getData(@RequestParam(defaultValue = "empty") String year) {
    if (!year.equals("empty"))
      return service.findDataByYear(Integer.parseInt(year));
    return service.findAll();
  }
}
