package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V1;
import com.tvt21webdev2.climatechangecharts.repository.V1Repository;

@Service
public class V1Service {

  private final V1Repository repository;

  public V1Service(final V1Repository repository) {
    this.repository = repository;
  }

  public List<V1> getAll() {
    return repository.findAll();
  }

  public List<V1> getDataByTypeLocationYear(String type, String location, String year) {
    return repository.findByTypeAndLocationAndYear(type, location, year);
  }

  public List<V1> getDataByTypeAndLocation(String type, String location) {
    return repository.findByTypeAndLocationOrderByYear(type, location);
  }

  public List<V1> getByType(String type) {
    return repository.findByType(type);
  }

  public List<V1> getByLocation(String location) {
    return repository.findByLocation(location);
  }

  public List<V1> getByYear(String year) {
    return repository.findByYear(year);
  }
}