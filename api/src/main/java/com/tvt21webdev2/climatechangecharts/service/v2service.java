package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V2;
import com.tvt21webdev2.climatechangecharts.repository.V2Repository;

@Service
public class V2Service {

  private final V2Repository repository;

  public V2Service(final V2Repository repository) {
    this.repository = repository;
  }

  public List<V2> getAll() {
    return repository.findAll();
  }

  public List<V2> getDataByYear(int year) {
    return repository.findByYear(year);
  }
}