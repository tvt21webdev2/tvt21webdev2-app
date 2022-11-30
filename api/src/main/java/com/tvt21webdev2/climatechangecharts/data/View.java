package com.tvt21webdev2.climatechangecharts.data;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class View {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "users_id")
  private Long userId;
  @Column(name = "url")
  private String url;
  private boolean v1, v2, v3, v4, v5, v6, v7, v8, v9, v10;
  private String v1description, v3description, v4description, v5description, v6description, v7description, v8description, v9description;
  @Column(name = "description")
  private String description;
  @Column(name = "stacked")
  private boolean stacked;

  public View() {
  }

  public View(Long id, Long userId, String url, boolean v1, boolean v2, boolean v3, boolean v4, boolean v5, boolean v6,
              boolean v7, boolean v8, boolean v9, boolean v10, String description, boolean stacked) {
    this.id = id;
    this.userId = userId;
    this.url = url;
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
    this.v4 = v4;
    this.v5 = v5;
    this.v6 = v6;
    this.v7 = v7;
    this.v8 = v8;
    this.v9 = v9;
    this.v10 = v10;
    this.description = description;
    this.stacked = stacked;
  }

  public View(Long userId, boolean stacked, String description, boolean v1, boolean v3, boolean v4, boolean v5, boolean v6,
              boolean v7, boolean v8, boolean v9, String v1Description, String v3Description, String v4Description, String v5Description, 
              String v6Description, String v7Description, String v8Description, String v9Description) {
    this.userId = userId;
    this.stacked = stacked;
    this.description = description;
    this.v1 = v1;
    this.v3 = v3;
    this.v4 = v4;
    this.v5 = v5;
    this.v6 = v6;
    this.v7 = v7;
    this.v8 = v8;
    this.v9 = v9;
    this.v1description = v1Description;
    this.v3description = v3Description;
    this.v4description = v4Description;
    this.v5description = v5Description;
    this.v6description = v6Description;
    this.v7description = v7Description;
    this.v8description = v8Description;
    this.v9description = v9Description;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public boolean isV1() {
    return v1;
  }

  public void setV1(boolean v1) {
    this.v1 = v1;
  }

  public boolean isV2() {
    return v2;
  }

  public void setV2(boolean v2) {
    this.v2 = v2;
  }

  public boolean isV3() {
    return v3;
  }

  public void setV3(boolean v3) {
    this.v3 = v3;
  }

  public boolean isV4() {
    return v4;
  }

  public void setV4(boolean v4) {
    this.v4 = v4;
  }

  public boolean isV5() {
    return v5;
  }

  public void setV5(boolean v5) {
    this.v5 = v5;
  }

  public boolean isV6() {
    return v6;
  }

  public void setV6(boolean v6) {
    this.v6 = v6;
  }

  public boolean isV7() {
    return v7;
  }

  public void setV7(boolean v7) {
    this.v7 = v7;
  }

  public boolean isV8() {
    return v8;
  }

  public void setV8(boolean v8) {
    this.v8 = v8;
  }

  public boolean isV9() {
    return v9;
  }

  public void setV9(boolean v9) {
    this.v9 = v9;
  }

  public boolean isV10() {
    return v10;
  }

  public void setV10(boolean v10) {
    this.v10 = v10;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public boolean isStacked() {
    return stacked;
  }

  public void setStacked(boolean stacked) {
    this.stacked = stacked;
  }

  public String createUrl() {
    UUID uuid = UUID.randomUUID();
    String urlString = uuid.toString();
    return urlString;
  }

  public String getV1description() {
    return v1description;
  }

  public void setV1description(String v1description) {
    this.v1description = v1description;
  }

  public String getV3description() {
    return v3description;
  }

  public void setV3description(String v3description) {
    this.v3description = v3description;
  }

  public String getV4description() {
    return v4description;
  }

  public void setV4description(String v4description) {
    this.v4description = v4description;
  }

  public String getV5description() {
    return v5description;
  }

  public void setV5description(String v5description) {
    this.v5description = v5description;
  }

  public String getV6description() {
    return v6description;
  }
  
  public void setV6description(String v6description) {
    this.v6description = v6description;
  }

  public String getV7description() {
    return v7description;
  }

  public void setV7description(String v7description) {
    this.v7description = v7description;
  }

  public String getV8description() {
    return v8description;
  }

  public void setV8description(String v8description) {
    this.v8description = v8description;
  }

  public String getV9description() {
    return v9description;
  }

  public void setV9description(String v9description) {
    this.v9description = v9description;
  }

}
