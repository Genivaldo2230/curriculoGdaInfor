package br.com.gdainfor.Service;

import org.springframework.stereotype.Service;
import java.util.List;
import br.com.gdainfor.entity.Contato;
import br.com.gdainfor.repository.ContatoRepository;

@Service
public class ContatoService {

    private final ContatoRepository repository;

    public ContatoService(ContatoRepository repository) {
        this.repository = repository;
    }

    public Contato salvar(Contato contato) {
        return repository.save(contato);
    }

    public List<Contato> listarTodos() {
        return repository.findAll();
    }
}
