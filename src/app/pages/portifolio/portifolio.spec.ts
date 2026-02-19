import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortifolioComponent } from './portifolio';
import { provideZonelessChangeDetection } from '@angular/core'; // 👈 Importe essencial

describe('PortifolioComponent', () => {
  let component: PortifolioComponent;
  let fixture: ComponentFixture<PortifolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortifolioComponent],
      providers: [
        provideZonelessChangeDetection() // 👈 Resolvendo o erro de Zone.js
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortifolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
