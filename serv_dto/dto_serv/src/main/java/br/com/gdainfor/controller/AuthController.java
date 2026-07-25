package br.com.gdainfor.controller;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.gdainfor.dto.LoginRequestDTO;
import br.com.gdainfor.dto.LoginResponseDTO;
import br.com.gdainfor.entity.Usuario;
import br.com.gdainfor.repository.UsuarioRepository;
import br.com.gdainfor.security.JWTUtil;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {


  private final UsuarioRepository usuarioRepository;
  private final PasswordEncoder passwordEncoder;
  private final JWTUtil jwtUtil;


  public AuthController(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder,
      JWTUtil jwtUtil) {

    this.usuarioRepository = usuarioRepository;
    this.passwordEncoder = passwordEncoder;
    this.jwtUtil = jwtUtil;
  }


  @PostMapping("/login")
  public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO dto) {


    Optional<Usuario> optUsuario = usuarioRepository.findByEmail(dto.getEmail());


    if (optUsuario.isEmpty()) {

      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }


    Usuario usuario = optUsuario.get();


    if (!passwordEncoder.matches(dto.getSenha(), usuario.getSenha())) {


      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }


    String token = jwtUtil.gerarToken(usuario.getEmail());


    return ResponseEntity.ok(new LoginResponseDTO(token, usuario.getEmail(), usuario.getNome()));
  }



  @PostMapping("/setup")
  public ResponseEntity<String> setup(@RequestBody LoginRequestDTO dto) {


    if (usuarioRepository.existsByEmail(dto.getEmail())) {

      return ResponseEntity.badRequest().body("Email já existe");
    }


    Usuario admin = new Usuario();

    admin.setEmail(dto.getEmail());
    admin.setSenha(passwordEncoder.encode(dto.getSenha()));
    admin.setNome("Administrador");


    usuarioRepository.save(admin);


    return ResponseEntity.ok("Admin criado com sucesso!");
  }
}
