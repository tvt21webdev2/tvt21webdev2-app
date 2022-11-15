package com.tvt21webdev2.climatechangecharts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class ClimateChangeChartsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClimateChangeChartsApplication.class, args);
	}

}
