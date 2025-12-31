import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homer } from './homer';

describe('Homer', () => {
  let component: Homer;
  let fixture: ComponentFixture<Homer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
