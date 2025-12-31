import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeModule } from './font-awesome-module';

describe('FontAwesomeModule', () => {
  let component: FontAwesomeModule;
  let fixture: ComponentFixture<FontAwesomeModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontAwesomeModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
