import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule
import { CommonModule } from '@angular/common';
import { ContatoService } from '../../models/services/contato.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Certifique-se de que o ReactiveFormsModule está aqui
  templateUrl: './contato.html',
  styleUrls: ['./contato.css']
})
export class ContatoComponent {
  contatoForm: FormGroup;
  carregando = false;

  constructor(private fb: FormBuilder, private contatoService: ContatoService) {
    // Aqui criamos o grupo que o seu HTML procura através do [formGroup]
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required]
    });
  }

  enviar() {
    if (this.contatoForm.valid) {
      this.carregando = true;
      this.contatoService.salvarContato(this.contatoForm.value).subscribe({
        next: () => {
          alert('Contato salvo no H2!');
          this.contatoForm.reset();
          this.carregando = false;
        },
        error: () => {
          alert('Erro ao salvar no banco.');
          this.carregando = false;
        }
      });
    }
  }
}
