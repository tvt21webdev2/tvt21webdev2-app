package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tvt21webdev2.climatechangecharts.data.V6;

@Repository
public interface V6Repository extends JpaRepository<V6, Long> {

  @Override
  @Query("SELECT v FROM V6 v ORDER BY v.gasAge DESC")
  List<V6> findAll();

}
