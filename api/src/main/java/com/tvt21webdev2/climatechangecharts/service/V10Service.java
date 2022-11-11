package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V10;
import com.tvt21webdev2.climatechangecharts.repository.V10Repository;

@Service
public class V10Service {
    private final V10Repository repository;

    public V10Service(final V10Repository repository) {
        this.repository = repository;
    }

    public List<V10> findAll() {
        return repository.findAll();
    }

    public List<V10> findDataByYear(int year) {
        return repository.findByYear(year);
    }
}
