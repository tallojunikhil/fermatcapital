import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CELPComponent } from './celp.component';

describe('CELPComponent', () => {
  let component: CELPComponent;
  let fixture: ComponentFixture<CELPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CELPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CELPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
