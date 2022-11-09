package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.v2;
import com.tvt21webdev2.climatechangecharts.repository.v2repo;

@Service
public class v2service {
    
    @Autowired
    v2repo v2repo;

    public List<v2> getAll() {
        return v2repo.findAll();
    }

    public List<v2> getDataByYear(int year) {
        return v2repo.findByYear(year);
    }
}