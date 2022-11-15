package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V9SubSub;
import com.tvt21webdev2.climatechangecharts.repository.V9SubSubRepository;

@Service
public class V9SubSubService {

    private final V9SubSubRepository repository;

    public V9SubSubService(final V9SubSubRepository repository) {
      this.repository = repository;
    }

    public List<V9SubSub> findAll() {
      return repository.findAll();
    }

    public List<V9SubSub> findBySubSecId(int subSectorId) {
      return repository.findBySubSecId(subSectorId);
    }
}
