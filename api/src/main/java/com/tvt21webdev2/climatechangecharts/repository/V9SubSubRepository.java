package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tvt21webdev2.climatechangecharts.data.V9SubSub;

@Repository
public interface V9SubSubRepository extends JpaRepository<V9SubSub, Long> {
  
  @Override
  @Query("SELECT v FROM V9SubSub v ORDER BY v.subSectorId")
  List <V9SubSub> findAll();

  @Query("SELECT v FROM V9SubSub v WHERE v.subSectorId = ?1 ORDER BY v.subSectorId")
  List<V9SubSub> findBySubSecId(int subSectorId);

}
