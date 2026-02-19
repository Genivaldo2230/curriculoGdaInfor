import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaContatosComponent } from './lista-contatos';
import { provideHttpClient } from '@angular/common/http'; // 👈 Importe o HttpClient real
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ListaContatos', () => {
  let component: ListaContatosComponent;
  let fixture: ComponentFixture<ListaContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaContatosComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(), // 👈 Substitua o provideClient() por este
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
