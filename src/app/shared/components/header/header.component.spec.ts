import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeadComponent;
  let fixture: ComponentFixture<HeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});