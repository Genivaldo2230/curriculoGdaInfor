import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoService, Contato } from '../../models/services/contato.service';
import { NavbarComponent } from '../navbar/navbar';
import { HomerComponent } from '../homer/homer';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [CommonModule, NavbarComponent,HomerComponent],
  template: `
    <div class="container">
      <h2>Mensagens Recebidas (H2 Database)</h2>
      <table border="1" *ngIf="contatos.length > 0; else vazio">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Mensagem</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let c of contatos">
            <td>{{ c.nome }}</td>
            <td>{{ c.email }}</td>
            <td>{{ c.mensagem }}</td>
          </tr>
        </tbody>
      </table>
      <ng-template #vazio><p>Nenhuma mensagem encontrada no banco.</p></ng-template>
    </div>
  `
})
export class ListaContatosComponent implements OnInit {
  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    this.contatoService.listarContatos().subscribe(dados => {
      this.contatos = dados;
    });
  }
}
