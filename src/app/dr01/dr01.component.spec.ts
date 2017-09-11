import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DR01Component } from './dr01.component';

describe('DR01Component', () => {
  let component: DR01Component;
  let fixture: ComponentFixture<DR01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DR01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DR01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
