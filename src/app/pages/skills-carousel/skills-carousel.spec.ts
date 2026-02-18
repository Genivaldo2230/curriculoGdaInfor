import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsCarouselComponent } from './skills-carousel';

describe('SkillsCarousel', () => {
  let component: SkillsCarouselComponent;
  let fixture: ComponentFixture<SkillsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsCarouselComponent]
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
