package com.tvt21webdev2.climatechangecharts.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class V4 {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "mean_air_age_year_a_d")
  private int year;
  @Column(name = "co2_mixing_ratio_ppm")
  private double co2;
  @Column(name = "set")
  private int set;

  public V4() {}

  public V4(int year, double co2, int set) {
    this.year = year;
    this.co2 = co2;
    this.set = set;
  }

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public int getYear() {
    return this.year;
  }

  public void setYear(int year) {
    this.year = year;
  }

  public double getCo2() {
    return this.co2;
  }

  public void setCo2(double co2) {
    this.co2 = co2;
  }

  public int getSet() {
    return this.set;
  }

  public void setSet(int set) {
    this.set = set;
  }
  
}
