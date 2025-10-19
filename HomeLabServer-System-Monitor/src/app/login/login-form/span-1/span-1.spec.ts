import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Span1 } from './span-1';

describe('Span1', () => {
  let component: Span1;
  let fixture: ComponentFixture<Span1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Span1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Span1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
