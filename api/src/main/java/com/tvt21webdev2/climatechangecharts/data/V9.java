package com.tvt21webdev2.climatechangecharts.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class V9 {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "label")
  private String label;
  @Column(name = "share_of_global_greenhouse_gas_emissions_perc")
  private double emissionsPercentage;

  public V9() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getLabel() {
    return label;
  }

  public void setSector(String label) {
    this.label = label;
  }

  public double getEmissionsPercentage() {
    return emissionsPercentage;
  }

  public void setEmissionsPercentage(double emissionsPercentage) {
    this.emissionsPercentage = emissionsPercentage;
  }

}
