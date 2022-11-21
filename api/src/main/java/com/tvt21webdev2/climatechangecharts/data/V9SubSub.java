package com.tvt21webdev2.climatechangecharts.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "v9_sub_sub")
public class V9SubSub {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "belongs_to")
  private Long belongsTo;
  @Column(name = "label")
  private String label;
  @Column(name = "share_of_global_greenhouse_gas_emissions_perc")
  private double greenhouseEmissions;

  public V9SubSub() {
  }

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getBelongsTo() {
    return this.belongsTo;
  }

  public void setBelongsTo(Long belongsTo) {
    this.belongsTo = belongsTo;
  }

  public String getLabel() {
    return this.label;
  }

  public void setLabel(String label) {
    this.label = label;
  }

  public double getGreenhouseEmissions() {
    return this.greenhouseEmissions;
  }

  public void setGreenhouseEmissions(double greenhouseEmissions) {
    this.greenhouseEmissions = greenhouseEmissions;
  }
  
}
