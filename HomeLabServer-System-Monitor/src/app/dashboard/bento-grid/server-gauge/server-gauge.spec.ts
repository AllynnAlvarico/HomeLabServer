import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerGauge } from './server-gauge';

describe('ServerGauge', () => {
  let component: ServerGauge;
  let fixture: ComponentFixture<ServerGauge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerGauge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerGauge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
