import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSocialMediaComponent } from './logo-social-media.component';

describe('LogoSocialMediaComponent', () => {
  let component: LogoSocialMediaComponent;
  let fixture: ComponentFixture<LogoSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoSocialMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
