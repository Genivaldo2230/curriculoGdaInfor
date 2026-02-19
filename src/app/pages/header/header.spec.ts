import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { provideZonelessChangeDetection } from '@angular/core'; // 👈 Importe necessário

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        provideZonelessChangeDetection() // 👈 Resolve o erro NG0908
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
