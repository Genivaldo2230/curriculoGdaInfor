import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaleComigoComponent } from './fale-comigo';
import { provideZonelessChangeDetection } from '@angular/core'; // 👈 Essencial
import { provideHttpClient } from '@angular/common/http'; // 👈 Necessário para o envio do form
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('FaleComigoComponent', () => {
  let component: FaleComigoComponent;
  let fixture: ComponentFixture<FaleComigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaleComigoComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FaleComigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
