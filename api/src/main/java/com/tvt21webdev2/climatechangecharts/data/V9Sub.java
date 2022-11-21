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
  private Long id;
  @Column(name = "belongs_to")
  private Long belongsTo;
  @Column(name = "label")
  private String label;
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

  public Long getBelongsTo() {
    return belongsTo;
  }

  public void setBelongsTo(Long belongsTo) {
    this.belongsTo = belongsTo;
  }

  public String getLabel() {
    return label;
  }

  public void setLabel(String label) {
    this.label = label;
  }

  public double getEmissionsPercentage() {
    return emissionsPercentage;
  }

  public void setEmissionsPercentage(double emissionsPercentage) {
    this.emissionsPercentage = emissionsPercentage;
  }

}