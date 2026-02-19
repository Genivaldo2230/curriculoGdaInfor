import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar';
import { provideZonelessChangeDetection } from '@angular/core'; // 👈 Importe aqui
import { provideRouter } from '@angular/router'; // 👈 Importe aqui

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [
        provideZonelessChangeDetection(), // 👈 Resolvendo o erro NG0908
        provideRouter([]) // 👈 Evita erro se houver [routerLink] no HTML
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
