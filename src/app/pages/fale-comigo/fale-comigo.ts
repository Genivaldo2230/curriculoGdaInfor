import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContatoService } from '../../models/services/contato.service';

@Component({
  selector: 'app-fale-comigo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fale-comigo.html',
  styleUrls: ['./fale-comigo.css']
})
export class FaleComigoComponent {
  contatoForm: FormGroup;
  enviado: boolean = false;
  imgFundo: string = "https://wallpapers.com/images/high/information-technology-dna-background-4cc3fggv9ksgx5n9.webp";

  constructor(private fb: FormBuilder, private contatoService: ContatoService) {
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.required]]
    });
  }

  enviar() {
    if (this.contatoForm.valid) {
      this.contatoService.salvarContato(this.contatoForm.value).subscribe({
        next: () => {
          this.enviado = true;
          this.contatoForm.reset();
        },
        error: () => alert('Erro ao conectar com o backend.')
      });
    }

    console.log('Botão clicado!'); // <--- Adicione isso
    console.log('Status do Formulário:', this.contatoForm.valid);
    console.log('Valores:', this.contatoForm.value);

    if (this.contatoForm.valid) {
      // ... resto do código do service
    } else {
      console.warn('O formulário está inválido e não tentará o envio.');
    }
  }
}
