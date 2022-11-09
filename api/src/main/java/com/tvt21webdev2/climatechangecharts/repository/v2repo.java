package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tvt21webdev2.climatechangecharts.data.v2;

public interface v2repo extends JpaRepository<v2, Long> {
    
    @Override
    @Query("SELECT v FROM v2 v ORDER BY year")
    List<v2> findAll();

    @Query("SELECT v FROM v2 v WHERE year >= ?1 ORDER BY year")
    List<v2> findByYear(int year);
}
