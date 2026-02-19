import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';
import { provideZonelessChangeDetection } from '@angular/core'; // 👈 O segredo para o sucesso

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [
        provideZonelessChangeDetection() // 👈 Remove o erro de Zone.js
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
