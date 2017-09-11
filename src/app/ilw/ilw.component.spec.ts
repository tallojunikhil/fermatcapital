import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlwComponent } from './ilw.component';

describe('IlwComponent', () => {
  let component: IlwComponent;
  let fixture: ComponentFixture<IlwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
