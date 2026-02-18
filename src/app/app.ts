import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestService } from './models/services/test/test';
import { Footer } from "./pages/footer/footer";
import { Header } from './pages/header/header';
import { NavbarComponent } from './pages/navbar/navbar';
import { SkillsCarouselComponent } from './pages/skills-carousel/skills-carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Footer, Header, NavbarComponent, SkillsCarouselComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  respostaApi = '';

  constructor(
    private readonly testService: TestService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.testService.testarApi().subscribe({
      next: (res: any) => this.respostaApi = res,
      error: (err: any) => console.error('Erro ao testar API:', err)
    });
  }

  ngAfterViewInit() {
    this.renderer.addClass(this.el.nativeElement, 'ativo');
  }
}
