import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionalExposureComponent } from './notional-exposure.component';

describe('NotionalExposureComponent', () => {
  let component: NotionalExposureComponent;
  let fixture: ComponentFixture<NotionalExposureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotionalExposureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotionalExposureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
