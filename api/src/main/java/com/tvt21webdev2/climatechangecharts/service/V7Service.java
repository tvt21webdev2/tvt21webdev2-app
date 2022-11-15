package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V7;
import com.tvt21webdev2.climatechangecharts.repository.V7Repository;

@Service
public class V7Service {

  private final V7Repository repository;

  public V7Service(final V7Repository repository) {
    this.repository = repository;
  }

  public List<V7> findAll() {
    return repository.findAll();
  }

  public List<V7> findByYearBp(int yearBp) {
    return repository.findByYearBp(yearBp);
  }

}