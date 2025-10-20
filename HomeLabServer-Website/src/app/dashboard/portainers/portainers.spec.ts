import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portainers } from './portainers';

describe('Portainers', () => {
  let component: Portainers;
  let fixture: ComponentFixture<Portainers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portainers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portainers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
