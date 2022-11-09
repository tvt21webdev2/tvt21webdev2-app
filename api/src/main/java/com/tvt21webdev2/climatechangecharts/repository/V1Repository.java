package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tvt21webdev2.climatechangecharts.data.V1;

@Repository
public interface V1Repository extends JpaRepository<V1, Long> {

  List<V1> findByType(String type);

  List<V1> findByLocation(String location);

  List<V1> findByTypeAndLocationOrderByYear(String type, String location);

  @Query("SELECT v FROM V1 v WHERE v.year>=?3 AND v.type=?1 AND v.location=?2")
  List<V1> findByTypeAndLocationAndYear(String type, String location, String year);

  @Query("SELECT v FROM V1 v WHERE v.year>=?1")
  List<V1> findByYear(String year);
}
