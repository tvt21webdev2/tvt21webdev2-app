package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V6;
import com.tvt21webdev2.climatechangecharts.repository.V6Repository;

@Service
public class V6Service {

  private final V6Repository repository;

  public V6Service(final V6Repository repository) {
    this.repository = repository;
  }

  public List<V6> findAll() {
    return repository.findAll();
  }

}
