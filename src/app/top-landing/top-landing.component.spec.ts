import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLandingComponent } from './top-landing.component';

describe('TopLandingComponent', () => {
  let component: TopLandingComponent;
  let fixture: ComponentFixture<TopLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
