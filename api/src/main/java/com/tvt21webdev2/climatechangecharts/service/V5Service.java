package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V5;
import com.tvt21webdev2.climatechangecharts.repository.V5Repository;

@Service
public class V5Service {
  
  private final V5Repository repository;

  public V5Service(final V5Repository repository) {
    this.repository = repository;
  }

  public List<V5> findAll() {
    return repository.findAll();
  }

  public List<V5> findByAirAge(int airAge) {
    return repository.findByAirAge(airAge);
  }
}
