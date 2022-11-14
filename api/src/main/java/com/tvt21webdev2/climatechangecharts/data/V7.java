package com.tvt21webdev2.climatechangecharts.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class V7 {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "year_bp")
  private int yearBp;
  @Column(name = "estimate_97_5_%")
  private double tempChange;

  public V7() {
  }

  public V7(int yearBp, double tempChange) {
    this.yearBp = yearBp;
    this.tempChange = tempChange;
  }

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public int getYearBp() {
    return this.yearBp;
  }

  public void setYearBp(int yearBp) {
    this.yearBp = yearBp;
  }

  public double getTempChange() {
    return this.tempChange;
  }

  public void setTempChange(double tempChange) {
    this.tempChange = tempChange;
  }
  
}
