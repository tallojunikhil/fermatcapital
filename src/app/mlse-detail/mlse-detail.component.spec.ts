import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlseDetailComponent } from './mlse-detail.component';

describe('MlseDetailComponent', () => {
  let component: MlseDetailComponent;
  let fixture: ComponentFixture<MlseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
