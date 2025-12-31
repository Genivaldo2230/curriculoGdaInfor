import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestService } from './test';

describe('TestService', () => {
  let service: TestService;
  let fixture: ComponentFixture<TestService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestService]
    })
    .compileComponents();

    service = TestBed.inject(TestService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
