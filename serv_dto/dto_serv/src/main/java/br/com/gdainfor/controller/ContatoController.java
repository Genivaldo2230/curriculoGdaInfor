package br.com.gdainfor.controller;

import br.com.gdainfor.entity.Contato;
import br.com.gdainfor.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contatos")
//@CrossOrigin(origins = "http://127.0.0.1:4200")
//@CrossOrigin(origins = "http://localhost:4200") // Permite apenas localhost

public class ContatoController {

    @Autowired
    private ContatoRepository repository;

    @PostMapping
    public Contato salvar(@RequestBody Contato contato) {
        // Adicionamos uma validação simples
        if (contato == null) {
            throw new IllegalArgumentException("Contato não pode ser nulo");
        }
        return repository.save(contato);
    }

    @GetMapping
    public List<Contato> listarTodos() {
        return repository.findAll();
    }
}