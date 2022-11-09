package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.v1;
import com.tvt21webdev2.climatechangecharts.repo.v1repo;

@Service
public class v1service {

    @Autowired
    v1repo v1repo;

    public List<v1> getAll() {
        return v1repo.findAll();
    }

    public List<v1> getDataByTypeLocationYear(String type, String location, String year) {
        return v1repo.findByTypeAndLocationAndYear(type, location, year);
    }

    public List<v1> getDataByTypeAndLocation(String type, String location) {
        return v1repo.findByTypeAndLocationOrderByYear(type, location);
    }

    public List<v1> getByType(String type) {
        return v1repo.findByType(type);
    }
    
    public List<v1> getByLocation(String location) {
        return v1repo.findByLocation(location);
    }

    public List<v1> getByYear(String year) {
        return v1repo.findByYear(year);
    }
}