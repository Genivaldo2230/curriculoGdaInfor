import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomerComponent } from './homer';
import { provideZonelessChangeDetection } from '@angular/core'; // 👈 O toque de mestre
import { provideRouter } from '@angular/router'; // 👈 Caso sua Home tenha links ou botões de navegação

describe('HomerComponent', () => {
  let component: HomerComponent;
  let fixture: ComponentFixture<HomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomerComponent],
      providers: [
        provideZonelessChangeDetection(), // 👈 Resolve o erro NG0908
        provideRouter([]) // 👈 Boa prática para evitar erros de rotas na Home
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
