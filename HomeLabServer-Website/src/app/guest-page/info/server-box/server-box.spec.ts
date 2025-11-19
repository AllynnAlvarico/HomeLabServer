import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerBox } from './server-box';

describe('ServerBox', () => {
  let component: ServerBox;
  let fixture: ComponentFixture<ServerBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
