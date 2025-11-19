import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGauge } from './bar-gauge';

describe('BarGauge', () => {
  let component: BarGauge;
  let fixture: ComponentFixture<BarGauge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarGauge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarGauge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
