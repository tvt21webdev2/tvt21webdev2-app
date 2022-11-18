package com.tvt21webdev2.climatechangecharts.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.V9SubSub;
import com.tvt21webdev2.climatechangecharts.service.V9SubSubService;

@CrossOrigin
@RestController
public class V9SubSubController {
  
  private final V9SubSubService service;

  public V9SubSubController(final V9SubSubService service) {
    this.service = service;
  }

  @GetMapping("/v9subsub")
  public List<V9SubSub> getData(@RequestParam(defaultValue = "empty") String subSectorId) {
    if(!subSectorId.equals("empty"))
      return service.findBySubSecId(Integer.parseInt(subSectorId));
    return service.findAll();
  }

}
