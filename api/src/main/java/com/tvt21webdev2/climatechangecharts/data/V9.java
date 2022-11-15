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
  @Column(name = "sector_id")
  private Long id;
  @Column(name = "sector")
  private String sector;
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

  public String getSector() {
    return sector;
  }

  public void setSector(String sector) {
    this.sector = sector;
  }

  public double getEmissionsPercentage() {
    return emissionsPercentage;
  }

  public void setEmissionsPercentage(double emissionsPercentage) {
    this.emissionsPercentage = emissionsPercentage;
  }

}
