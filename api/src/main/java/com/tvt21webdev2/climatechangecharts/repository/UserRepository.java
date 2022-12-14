package com.tvt21webdev2.climatechangecharts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.tvt21webdev2.climatechangecharts.data.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  @Query("SELECT v FROM User v WHERE v.username = ?1")
  List<User> findByUsername(String username);

  boolean existsByUsername(String username);

  @Transactional
  void deleteByUsername(String username);

}
