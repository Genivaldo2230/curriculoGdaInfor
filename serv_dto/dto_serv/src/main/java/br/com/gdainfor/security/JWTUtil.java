package br.com.gdainfor.security;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
@Component
public class JWTUtil {

  // Mínimo 256 bits (32 caracteres) para HS256
  private static final long EXPIRATION = 86400000; // 24 horas

  private final SecretKey key;

  public JWTUtil(@Value("${jwt.secret}") String secret) {
    this.key = Keys.hmacShaKeyFor(secret.getBytes());
  }

  public String gerarToken(String email) {
    return Jwts.builder().subject(email) // ← .subject() no lugar de .setSubject()
        .issuedAt(new Date()) // ← .issuedAt()
        .expiration(new Date(System.currentTimeMillis() + EXPIRATION)).signWith(key, Jwts.SIG.HS256) // ← Nova sintaxe de assinatura
        .compact();
  }

  public String extrairEmail(String token) {
    return Jwts.parser().verifyWith(key) // ← .verifyWith() no lugar de .setSigningKey()
        .build().parseSignedClaims(token) // ← .parseSignedClaims()
        .getPayload().getSubject();
  }

  @SuppressWarnings("UseSpecificCatch")
  public boolean validarToken(String token) {
    try {
      Jwts.parser().verifyWith(key).build().parseSignedClaims(token);
      return true;
    } catch (ExpiredJwtException e) {
      System.out.println("Token expirado: " + e.getMessage());
      return false;
    } catch (Exception e) {
      System.out.println("Token inválido: " + e.getMessage());
      return false;
    }
  }
}
