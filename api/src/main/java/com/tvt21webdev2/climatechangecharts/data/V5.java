package com.tvt21webdev2.climatechangecharts.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class V5 {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "mean_age_of_the_air_bp")
  private int airAge;
  @Column(name = "co2_concentration_ppmv")
  private double co2;

  public V5() {
  }

  public V5(int airAge, double co2) {
    this.airAge = airAge;
    this.co2 = co2;
  }

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public int getAirAge() {
    return this.airAge;
  }

  public void setAirAge(int airAge) {
    this.airAge = airAge;
  }

  public double getCo2() {
    return this.co2;
  }

  public void setCo2(double co2) {
    this.co2 = co2;
  }

}
