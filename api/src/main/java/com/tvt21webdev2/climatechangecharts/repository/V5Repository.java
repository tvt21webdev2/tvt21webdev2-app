package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tvt21webdev2.climatechangecharts.data.V5;

@Repository
public interface V5Repository extends JpaRepository<V5, Long> {
  
  @Override
  @Query("SELECT v FROM V5 v ORDER BY v.airAge")
  List<V5> findAll();

  @Query("SELECT v FROM V5 v WHERE v.airAge >= ?1 ORDER BY v.airAge")
  List<V5> findByAirAge(int airAge);
  
}
