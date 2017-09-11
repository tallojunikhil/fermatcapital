import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseDetailComponent } from './else-detail.component';

describe('ElseDetailComponent', () => {
  let component: ElseDetailComponent;
  let fixture: ComponentFixture<ElseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
