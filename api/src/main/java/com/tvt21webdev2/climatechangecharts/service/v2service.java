package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V2;
import com.tvt21webdev2.climatechangecharts.repository.V2Repository;

@Service
public class V2Service {
    
    @Autowired
    V2Repository v2repo;

    public List<V2> getAll() {
        return v2repo.findAll();
    }

    public List<V2> getDataByYear(int year) {
        return v2repo.findByYear(year);
    }
}