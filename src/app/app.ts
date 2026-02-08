import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestService } from './models/services/test/test';
import { Footer } from "./pages/footer/footer";
import { Header } from './pages/header/header';
import { NavbarComponent } from './pages/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Footer, Header, NavbarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  respostaApi = '';

  constructor(private readonly testService: TestService) {}

  ngOnInit(): void {
    this.testService.testarApi().subscribe({
      next: (res: any) => this.respostaApi = res,
      error: (err: any) => console.error('Erro ao testar API:', err)
    });
  }

}
