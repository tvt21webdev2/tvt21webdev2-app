package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.tvt21webdev2.climatechangecharts.data.User;
import com.tvt21webdev2.climatechangecharts.repository.UserRepository;

@Service
public class SecurityService {

  @Value("${jwt.secret}")
  private String jwtKey;

  private final UserRepository repository;
  private final EncoderService service;

  public SecurityService(final UserRepository repository, final EncoderService service) {
    this.repository = repository;
    this.service = service;
  }

  public User register(String username, String password) {
    User u = new User(username, service.encode(password));
    repository.save(u);
    return u;
  }

  public String login(String username, String password) {
    List<User> users = repository.findByUsername(username);

    User user = users.size() > 0 ? users.get(0) : null;

    if (user == null || !service.matches(password, user.getPassword()))
      return null;

    Algorithm alg = Algorithm.HMAC256(jwtKey);
    return JWT.create().withSubject(user.getUsername()).sign(alg);
  }
}
