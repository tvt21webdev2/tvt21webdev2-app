package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.User;
import com.tvt21webdev2.climatechangecharts.repository.UserRepository;

@Service
public class UserService {

  private final UserRepository repository;

  public UserService(final UserRepository repository) {
    this.repository = repository;
  }

  public List<User> findAll() {
    return repository.findAll();
  }

  public List<User> findByUsername(String username) {
    return repository.findByUsername(username);
  }

  public Optional<User> findById(Long id) {
    return repository.findById(id);
  }

}
