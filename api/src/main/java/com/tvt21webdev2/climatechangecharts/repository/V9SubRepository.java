package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tvt21webdev2.climatechangecharts.data.V9Sub;

@Repository
public interface V9SubRepository extends JpaRepository<V9Sub, Long> {

  List<V9Sub> findAll();

  List<V9Sub> findByBelongsTo(Long belongsTo);

}
