package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tvt21webdev2.climatechangecharts.data.V9;

@Repository
public interface V9Repository extends JpaRepository<V9, Long> {
  List<V9> findAll();
}
