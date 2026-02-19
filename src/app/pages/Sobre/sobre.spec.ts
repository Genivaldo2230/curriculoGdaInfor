import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreComponent } from './sobre';
import { provideZonelessChangeDetection } from '@angular/core'; // 👈 Importe essencial

describe('SobreComponent', () => {
  let component: SobreComponent;
  let fixture: ComponentFixture<SobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreComponent],
      providers: [
        provideZonelessChangeDetection() // 👈 Isso mata o erro NG0908
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
