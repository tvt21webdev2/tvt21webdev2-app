package com.tvt21webdev2.climatechangecharts.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.v1;
import com.tvt21webdev2.climatechangecharts.repo.v1repo;

@RestController
public class v1controller {
    
    @Autowired
    private v1repo v1repo; 

    @GetMapping("/v1")
    public List<v1> getData() {
        return v1repo.findAll();
    }

    @GetMapping("v1/type/{type}")
    public List<v1> getByType(@PathVariable String type) {
        return v1repo.findByType(type);
    }
    
    @GetMapping("v1/location/{location}")
    public List<v1> getByLocation(@PathVariable String location) {
        return v1repo.findByLocation(location);
    }

    @GetMapping("v1/year/{year}")
    public List<v1> getByYear(@PathVariable String year) {
        return v1repo.findByYear(year);
    }

    @GetMapping("v1/search/{type}/{location}")
    public List<v1> getByQuery(@PathVariable String type, @PathVariable String location) {
        return v1repo.findByTypeAndLocationOrderByYear(type, location);
    }

    @GetMapping("v1/search/{type}/{location}/{year}")
    public List<v1> getByQuery(@PathVariable String type, @PathVariable String location, @PathVariable String year) {
        return v1repo.findByTypeAndLocationAndYear(type, location, year);
    }
}
