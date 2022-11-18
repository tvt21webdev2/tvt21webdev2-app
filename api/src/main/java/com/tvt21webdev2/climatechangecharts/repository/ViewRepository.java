package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tvt21webdev2.climatechangecharts.data.View;

@Repository
public interface ViewRepository extends JpaRepository<View, Long> {

  @Query("SELECT v FROM View v WHERE v.userId = ?1")
  List<View> findByUserId(Long userId);

  @Query("SELECT v FROM View v WHERE v.url = ?1")
  List<View> findByUrl(String url);

  @Transactional
  void deleteById(Long id);

}
