import { TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // ou o caminho do seu wrapper
import { provideZonelessChangeDetection } from '@angular/core';

describe('FontAwesomeModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Se for um teste de módulo, ele entra no imports
      imports: [FontAwesomeModule],
      providers: [
        provideZonelessChangeDetection() // 👈 O golpe final no erro NG0908
      ]
    }).compileComponents();
  });

  it('should create', () => {
    // Esse teste apenas verifica se o módulo carrega sem explodir
    expect(FontAwesomeModule).toBeTruthy();
  });
});
