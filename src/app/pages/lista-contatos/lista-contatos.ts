import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoService, Contato } from '../../models/services/contato.service';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-lista">
      <h2>Mensagens Recebidas - Retornaremos</h2>

      <div class="lista-contatos" *ngIf="contatos.length > 0; else vazio">
        <div
          class="card-contato"
          *ngFor="let c of contatos"
          [class.lido]="c.lido"
        >
          <div class="card-header">
            <h3>{{ c.nome }}</h3>
            <span class="badge" *ngIf="c.lido">✓ Lido</span>
          </div>

          <p><strong>Email:</strong> {{ c.email }}</p>
          <p><strong>Mensagem:</strong> {{ c.mensagem }}</p>

          <div class="card-acoes">
            <button
              class="btn-lido"
              (click)="marcarLido(c)"
              [disabled]="c.lido"
            >
              {{ c.lido ? '✓ Lido' : 'Marcar como Lido' }}
            </button>

            <button
              class="btn-delete"
              (click)="deletar(c)"
            >
              🗑️ Deletar
            </button>
          </div>
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
  corFundo = 'lightgreen';
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

  marcarLido(contato: Contato) {
    if (!contato._id) return;

    this.contatoService.marcarComoLido(contato._id).subscribe({
      next: (atualizado) => {
        contato.lido = atualizado.lido;
      },
      error: (err) => {
        console.error('Erro ao marcar como lido:', err);
      }
    });
  }

  deletar(contato: Contato) {
    if (!contato._id) return;

    if (!confirm('Tem certeza que deseja deletar esta mensagem?')) {
      return;
    }

    this.contatoService.deletarContato(contato._id).subscribe({
      next: () => {
        this.contatos = this.contatos.filter(c => c._id !== contato._id);
      },
      error: (err) => {
        console.error('Erro ao deletar:', err);
      }
    });
  }
}
