import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contato {
  _id?: string;
  nome: string;
  email: string;
  mensagem: string;
  lido?: boolean;
  createdAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  // Verifique se a porta é a 8080 do seu Spring Boot
  private apiUrl = 'http://localhost:8080/api/contatos';
  // Substitua o localhost por 127.0.0.1
  // private apiUrl = 'http://127.0.0.1:8080/api/contatos';

  constructor(private http: HttpClient) { }

  // Usado pela tela 'lista-contatos'
  listarContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }

  // Usado pela tela 'fale-comigo'
  salvarContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.apiUrl, contato);
  }

  // contato.service.ts - adicione estes métodos na classe ContatoService

  marcarComoLido(id: string): Observable<Contato> {
    return this.http.patch<Contato>(`${this.apiUrl}/${id}`, { lido: true });
  }

  deletarContato(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
