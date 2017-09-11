import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlseComponent } from './mlse.component';

describe('MlseComponent', () => {
  let component: MlseComponent;
  let fixture: ComponentFixture<MlseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
