import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Span2 } from './span-2';

describe('Span2', () => {
  let component: Span2;
  let fixture: ComponentFixture<Span2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Span2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Span2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
