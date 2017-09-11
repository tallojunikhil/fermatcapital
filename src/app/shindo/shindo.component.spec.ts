import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShindoComponent } from './shindo.component';

describe('ShindoComponent', () => {
  let component: ShindoComponent;
  let fixture: ComponentFixture<ShindoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShindoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
