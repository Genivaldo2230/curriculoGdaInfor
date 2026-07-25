package br.com.gdainfor.dto;

public class LoginResponseDTO {

  private final String token;
  private final String email;
  private final String nome;

  public LoginResponseDTO(String token, String email, String nome) {
    this.token = token;
    this.email = email;
    this.nome = nome;
  }

  public String getToken() {
    return token;
  }

  public String getEmail() {
    return email;
  }

  public String getNome() {
    return nome;
  }
}
