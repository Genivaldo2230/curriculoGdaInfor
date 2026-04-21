package br.com.gdainfor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "br.com.gdainfor") // Certifique-se de que o pacote base está correto para escanear os componentes
public class GdainforApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(GdainforApiApplication.class, args);
    }
}
