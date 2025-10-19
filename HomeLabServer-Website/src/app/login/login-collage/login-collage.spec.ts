import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCollage } from './login-collage';

describe('LoginCollage', () => {
  let component: LoginCollage;
  let fixture: ComponentFixture<LoginCollage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCollage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCollage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
