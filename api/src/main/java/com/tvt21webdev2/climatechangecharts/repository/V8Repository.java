package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tvt21webdev2.climatechangecharts.data.V8;

@Repository
public interface V8Repository extends JpaRepository<V8, Long> {

  @Override
  @Query("SELECT v FROM V8 v ORDER BY v.year")
  List<V8> findAll();

  @Query("SELECT v FROM V8 v WHERE v.country = ?1 ORDER BY v.year")
  List<V8> findByCountry(String country);

}
