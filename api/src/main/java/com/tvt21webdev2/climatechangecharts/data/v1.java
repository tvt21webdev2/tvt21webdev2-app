package com.tvt21webdev2.climatechangecharts.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class V1 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "year")
    private String year;
    @Column(name = "anomaly_deg_c")
    private double anomaly;
    @Column(name = "type")
    private String type;
    @Column(name = "location")
    private String location;

    public V1() {
    }

    public V1(String year, double anomaly, String type, String location) {
        this.year = year;
        this.anomaly = anomaly;
        this.type = type;
        this.location = location;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public double getAnomaly() {
        return anomaly;
    }

    public void setAnomaly(double anomaly) {
        this.anomaly = anomaly;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
