package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.V1;
import com.tvt21webdev2.climatechangecharts.repository.V1Repository;

@Service
public class V1service {

    @Autowired
    V1Repository V1repo;

    public List<V1> getAll() {
        return V1repo.findAll();
    }

    public List<V1> getDataByTypeLocationYear(String type, String location, String year) {
        return V1repo.findByTypeAndLocationAndYear(type, location, year);
    }

    public List<V1> getDataByTypeAndLocation(String type, String location) {
        return V1repo.findByTypeAndLocationOrderByYear(type, location);
    }

    public List<V1> getByType(String type) {
        return V1repo.findByType(type);
    }
    
    public List<V1> getByLocation(String location) {
        return V1repo.findByLocation(location);
    }

    public List<V1> getByYear(String year) {
        return V1repo.findByYear(year);
    }
}