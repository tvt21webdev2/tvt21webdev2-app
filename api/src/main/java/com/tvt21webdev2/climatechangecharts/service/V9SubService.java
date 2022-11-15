package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V9Sub;
import com.tvt21webdev2.climatechangecharts.repository.V9SubRepository;

@Service
public class V9SubService {

  private final V9SubRepository repository;

  public V9SubService(final V9SubRepository repository) {
    this.repository = repository;
  }

  public List<V9Sub> findAll() {
    return repository.findAll();
  }

  public List<V9Sub> findBySectorId(Long sectorId) {
    return repository.findBySectorId(sectorId);
  }

}
