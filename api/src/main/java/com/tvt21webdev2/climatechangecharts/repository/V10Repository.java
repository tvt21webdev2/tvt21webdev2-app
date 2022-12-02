package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tvt21webdev2.climatechangecharts.data.V10;

@Repository
public interface V10Repository extends JpaRepository<V10, Long> {

    @Override
    @Query("SELECT v FROM V10 v ORDER BY v.year")
    List<V10> findAll();

    @Query("SELECT v FROM V10 v WHERE v.year > ?1 ORDER BY v.year")
    List<V10> findByYear(int year);
    
}
