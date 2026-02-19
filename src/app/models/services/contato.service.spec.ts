import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ContatoService } from './contato.service';

describe('ContatoService', () => {
  let service: ContatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContatoService,
        provideZonelessChangeDetection(), // 👈 Evita o erro NG0908
        provideHttpClient(),              // 👈 Permite injetar o HttpClient
        provideHttpClientTesting()       // 👈 Ferramenta para simular respostas da API
      ]
    });
    service = TestBed.inject(ContatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
