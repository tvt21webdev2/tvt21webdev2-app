package com.tvt21webdev2.climatechangecharts.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tvt21webdev2.climatechangecharts.data.v1;

public interface v1repo extends JpaRepository<v1, Long> {
    
    List<v1> findByType(String type);

    List<v1> findByLocation(String location);

    List<v1> findByTypeAndLocationOrderByYear(String type, String location);

    @Query("SELECT v FROM v1 v WHERE v.year>=?3 AND v.type=?1 AND v.location=?2")
    List<v1> findByTypeAndLocationAndYear(String type, String location, String year);

    @Query("SELECT v FROM v1 v WHERE v.year>=?1")
    List<v1> findByYear(String year);
}
