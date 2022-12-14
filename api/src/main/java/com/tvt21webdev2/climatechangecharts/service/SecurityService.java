package com.tvt21webdev2.climatechangecharts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
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

  public void saveUser(User user) {
    user.setPassword(service.encode(user.getPassword()));
    repository.save(user);
  }

  public boolean checkIfUserExists(User user) {
    return repository.existsByUsername(user.getUsername());
  }

  public boolean validateUser(User user) {

    List<User> users = repository.findByUsername(user.getUsername());
    try {
      User userFromRepo = users.size() > 0 ? users.get(0) : null;
      return userFromRepo != null && service.matches(user.getPassword(), userFromRepo.getPassword());
    } catch (IndexOutOfBoundsException e) {
      e.printStackTrace();
      return false;
    }
  }

  public String generateJwt(User user) {
    Algorithm alg = Algorithm.HMAC256(jwtKey);
    return JWT.create().withSubject(user.getUsername()).sign(alg);
  }

  public String validateJwt(String token) {
    Algorithm alg = Algorithm.HMAC256(jwtKey);
    JWTVerifier verifier = JWT.require(alg).build();
    try {
      DecodedJWT jwt = verifier.verify(token);
      return jwt.getSubject();
    } catch (JWTVerificationException e) {
      e.printStackTrace();
      return null;
    }
  }
}
