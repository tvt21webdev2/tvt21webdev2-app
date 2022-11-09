package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tvt21webdev2.climatechangecharts.data.V2;

@Repository
public interface V2Repository extends JpaRepository<V2, Long> {

  @Override
  @Query("SELECT v FROM v2 v ORDER BY year")
  List<V2> findAll();

  @Query("SELECT v FROM v2 v WHERE year >= ?1 ORDER BY year")
  List<V2> findByYear(int year);

}
