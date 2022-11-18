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

  public View() {
  }

  public View(Long id, Long userId, String url, boolean v1, boolean v2, boolean v3, boolean v4, boolean v5, boolean v6,
      boolean v7, boolean v8, boolean v9, boolean v10) {
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

  public String createUrl() {
    UUID uuid = UUID.randomUUID();
    String urlString = uuid.toString();
    return urlString;
  }

}
