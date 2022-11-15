package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V9;
import com.tvt21webdev2.climatechangecharts.repository.V9Repository;

@Service
public class V9Service {

  private final V9Repository repository;

  public V9Service(final V9Repository repository) {
    this.repository = repository;
  }

  public List<V9> findAll() {
    return repository.findAll();
  }

}
