package com.tvt21webdev2.climatechangecharts.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "v9_sub")
public class V9Sub {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "sub_sector_id")
  private Long id;
  @Column(name = "sector_id")
  private Long sectorId;
  @Column(name = "sub_sector")
  private String subSector;
  @Column(name = "share_of_global_greenhouse_gas_emissions_perc")
  private double emissionsPercentage;

  public V9Sub() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getSectorId() {
    return sectorId;
  }

  public void setSectorId(Long sectorId) {
    this.sectorId = sectorId;
  }

  public String getSubSector() {
    return subSector;
  }

  public void setSubSector(String subSector) {
    this.subSector = subSector;
  }

  public double getEmissionsPercentage() {
    return emissionsPercentage;
  }

  public void setEmissionsPercentage(double emissionsPercentage) {
    this.emissionsPercentage = emissionsPercentage;
  }
}