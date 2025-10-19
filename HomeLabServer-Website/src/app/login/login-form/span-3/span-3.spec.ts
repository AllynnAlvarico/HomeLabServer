import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Span3 } from './span-3';

describe('Span3', () => {
  let component: Span3;
  let fixture: ComponentFixture<Span3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Span3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Span3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
