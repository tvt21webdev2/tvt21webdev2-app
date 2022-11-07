package com.tvt21webdev2.climatechangecharts.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tvt21webdev2.climatechangecharts.data.v1;
import com.tvt21webdev2.climatechangecharts.repo.v1repo;

@RestController
public class v1controller {
    
    @Autowired
    private v1repo v1repo; 

    // http://localhost:8080/v1?type=monthly&location=global&year=2022-01
    @GetMapping("/v1")
    public List<v1> getData(@RequestParam(defaultValue = "empty") String type, @RequestParam(defaultValue = "empty") String location, @RequestParam(defaultValue = "empty") String year) {
        if (!type.equals("empty") && !location.equals("empty") && !year.equals("empty"))
            return v1repo.findByTypeAndLocationAndYear(type, location, year);
        if (!type.equals("empty") && !location.equals("empty"))
            return v1repo.findByTypeAndLocationOrderByYear(type, location);
        if (!type.equals("empty"))
            return v1repo.findByType(type);
        if (!location.equals("empty"))
            return v1repo.findByLocation(location);
        if (!year.equals("empty"))
            return v1repo.findByYear(year);
        return v1repo.findAll();
    }
}
