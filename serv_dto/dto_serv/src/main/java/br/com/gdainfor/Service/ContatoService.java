package br.com.gdainfor.Service;

import br.com.gdainfor.entity.Contato;
import br.com.gdainfor.repository.ContatoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContatoService {

    private final ContatoRepository repository;

    public ContatoService(ContatoRepository repository) {
        this.repository = repository;
    }

    /**
     * Salva um contato
     * @param contato objeto Contato (não pode ser null)
     * @return Contato salvo
     */
    public Contato salvar(Contato contato) {
        if (contato == null) {
            throw new IllegalArgumentException("O contato não pode ser nulo");
        }
        return repository.save(contato);
    }

    public List<Contato> listarTodos() {
        return repository.findAll();
    }
}