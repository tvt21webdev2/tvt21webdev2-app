package com.tvt21webdev2.climatechangecharts.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class View {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
}
