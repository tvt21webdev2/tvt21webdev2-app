package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tvt21webdev2.climatechangecharts.data.V4;

@Repository
public interface V4Repository extends JpaRepository<V4, Long> {
  
  @Override
  @Query("SELECT v FROM V4 v ORDER BY v.set")
  List<V4> findAll();

  List<V4> findBySetOrderByYear(int set);

}
