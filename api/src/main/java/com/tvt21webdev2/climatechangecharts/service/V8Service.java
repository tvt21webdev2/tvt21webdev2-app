package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V8;
import com.tvt21webdev2.climatechangecharts.repository.V8Repository;

@Service
public class V8Service {

  private final V8Repository repository;

  public V8Service(final V8Repository repository) {
    this.repository = repository;
  }

  public List<V8> findAll() {
    return repository.findAll();
  }

  public List<V8> findByYear(int year) {
    return repository.findByYear(year);
  }

}