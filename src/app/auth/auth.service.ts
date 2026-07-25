import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private api = 'http://localhost:8080/api/auth';


  login(email: string, senha: string) {

    return this.http.post<any>(
      `${this.api}/login`,
      {
        email,
        senha
      }
    );
  }


  salvarToken(token: string) {
    localStorage.setItem('token', token);
  }


  estaLogado(): boolean {
    return !!localStorage.getItem('token');
  }


  logout() {
    localStorage.removeItem('token');
  }
}
