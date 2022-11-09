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

  public List<V1> findAll() {
    return repository.findAll();
  }

  public List<V1> findDataByTypeLocationYear(String type, String location, String year) {
    return repository.findByTypeAndLocationAndYear(type, location, year);
  }

  public List<V1> findDataByTypeAndLocation(String type, String location) {
    return repository.findByTypeAndLocationOrderByYear(type, location);
  }

  public List<V1> findByType(String type) {
    return repository.findByType(type);
  }

  public List<V1> findByLocation(String location) {
    return repository.findByLocation(location);
  }

  public List<V1> findByYear(String year) {
    return repository.findByYear(year);
  }

}