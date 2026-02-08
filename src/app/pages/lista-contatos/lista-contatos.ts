import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoService, Contato } from '../../models/services/contato.service';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-lista">
      <h2>Mensagens Recebidas (H2 Database)</h2>

      <div class="lista-contatos" *ngIf="contatos.length > 0; else vazio">
        <div class="card-contato" *ngFor="let c of contatos">
          <h3>{{ c.nome }}</h3>
          <p><strong>Email:</strong> {{ c.email }}</p>
          <p><strong>Mensagem:</strong> {{ c.mensagem }}</p>
        </div>
      </div>

      <ng-template #vazio>
        <p>Nenhuma mensagem encontrada no banco.</p>
      </ng-template>
    </div>
  `,
  styleUrls: ['./lista-contatos.css']
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
