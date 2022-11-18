package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.V1;
import com.tvt21webdev2.climatechangecharts.service.V1Service;

@CrossOrigin
@RestController
public class V1Controller {

  private final V1Service service;

  public V1Controller(V1Service service) {
    this.service = service;
  }

  // http://localhost:8080/v1?type=monthly&location=global&year=2022-01
  @GetMapping("/v1")
  public List<V1> getData(@RequestParam(defaultValue = "empty") String type,
      @RequestParam(defaultValue = "empty") String location, @RequestParam(defaultValue = "empty") String year) {
    if (!type.equals("empty") && !location.equals("empty") && !year.equals("empty"))
      return service.findDataByTypeLocationYear(type, location, year);
    if (!type.equals("empty") && !location.equals("empty"))
      return service.findDataByTypeAndLocation(type, location);
    if (!type.equals("empty"))
      return service.findByType(type);
    if (!location.equals("empty"))
      return service.findByLocation(location);
    if (!year.equals("empty"))
      return service.findByYear(year);
    return service.findAll();
  }
  
}
