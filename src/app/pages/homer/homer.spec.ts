import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerComponent } from './homer';

describe('HomerComponent', () => {
  let component: HomerComponent;
  let fixture: ComponentFixture<HomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomerComponent]
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
