package com.tvt21webdev2.climatechangecharts.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class V9SubSub {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "sub_sector_id")
  private int subSectorId;
  @Column(name = "sub_sub_sector")
  private String subSubSector;
  @Column(name = "share_of_global_greenhouse_gas_emissions_perc")
  private double greenhouseEmissions;

  public V9SubSub() {
  }

  public V9SubSub(int subSectorId, String subSubSector, double greenhouseEmissions) {
    this.subSectorId = subSectorId;
    this.subSubSector = subSubSector;
    this.greenhouseEmissions = greenhouseEmissions;
  }

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public int getSubSectorId() {
    return this.subSectorId;
  }

  public void setSubSectorId(int subSectorId) {
    this.subSectorId = subSectorId;
  }

  public String getSubSubSector() {
    return this.subSubSector;
  }

  public void setSubSubSector(String subSubSector) {
    this.subSubSector = subSubSector;
  }

  public double getGreenhouseEmissions() {
    return this.greenhouseEmissions;
  }

  public void setGreenhouseEmissions(double greenhouseEmissions) {
    this.greenhouseEmissions = greenhouseEmissions;
  }
  
}
