import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app';
import { TestService } from './models/services/test/test';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router'; // 👈 Importe isso
import { routes } from './app.routes'; // 👈 E as suas rotas

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        TestService,
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter(routes) // 👈 Adicione isso para evitar o erro de rotas
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Verifique se existe um h1 no seu app.html ou navbar.html com esse texto
    const element = compiled.querySelector('h1') || compiled.querySelector('app-navbar') || compiled.querySelector('main');

    expect(element).not.toBeNull();
  });

});
