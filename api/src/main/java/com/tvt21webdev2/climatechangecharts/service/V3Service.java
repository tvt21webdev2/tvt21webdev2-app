package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V3;
import com.tvt21webdev2.climatechangecharts.repository.V3Repository;

@Service
public class V3Service {

  private final V3Repository repository;

  public V3Service(final V3Repository repository) {
    this.repository = repository;
  }

  public List<V3> findAll() {
    return repository.findAll();
  }

  public List<V3> findByType(String type) {
    return repository.findByType(type);
  }

}
