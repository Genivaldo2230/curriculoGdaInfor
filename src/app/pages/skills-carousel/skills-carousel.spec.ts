import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsCarouselComponent } from './skills-carousel';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SkillsCarousel', () => {
  let component: SkillsCarouselComponent;
  let fixture: ComponentFixture<SkillsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsCarouselComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
