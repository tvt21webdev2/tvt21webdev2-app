package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tvt21webdev2.climatechangecharts.data.V3;

@Repository
public interface V3Repository extends JpaRepository<V3, Long> {

  List<V3> findByType(String type);

}
