package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.V2;
import com.tvt21webdev2.climatechangecharts.service.V2Service;

@RestController
public class V2Controller {

  @Autowired
  V2Service v2service;

  @GetMapping("/v2")
  public List<V2> getData(@RequestParam(defaultValue = "empty") String year) {
    if (!year.equals("empty"))
      return v2service.getDataByYear(Integer.parseInt(year));
    return v2service.getAll();
  }
}
