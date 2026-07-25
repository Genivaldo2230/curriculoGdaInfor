import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  usuario = '';
  senha = '';

  private authService = inject(AuthService);
  private router = inject(Router);


  login() {

    this.authService.login(
      this.usuario,
      this.senha
    )
    .subscribe({

      next: (res) => {

        console.log('Login OK', res);

        this.authService.salvarToken(res.token);

        this.router.navigate(['/lista-contatos']);

      },


      error: (erro) => {

        console.log(erro);

        alert('Usuário ou senha inválidos');

      }

    });

  }

}
