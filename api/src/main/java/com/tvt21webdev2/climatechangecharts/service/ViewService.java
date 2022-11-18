package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tvt21webdev2.climatechangecharts.data.View;
import com.tvt21webdev2.climatechangecharts.repository.ViewRepository;

@Service
public class ViewService {

  private final ViewRepository repository;

  public ViewService(final ViewRepository repository) {
    this.repository = repository;
  }

  public List<View> findAll() {
    return repository.findAll();
  }

  public List<View> findByUserId(Long userId) {
    return repository.findByUserId(userId);
  }

  public List<View> findByUrl(String url) {
    return repository.findByUrl(url);
  }

  public void saveView(View view) {
    view.setUrl(view.createUrl());
    repository.save(view);
  }
}
