package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V4;
import com.tvt21webdev2.climatechangecharts.repository.V4Repository;

@Service
public class V4Service {
  
  private final V4Repository repository;

  public V4Service(final V4Repository repository) {
    this.repository = repository;
  }

  public List<V4> findAll() {
    return repository.findAll();
  }

  public List<V4> findBySetOrderByYear(int set) {
    return repository.findBySetOrderByYear(set);
  }
  
}
