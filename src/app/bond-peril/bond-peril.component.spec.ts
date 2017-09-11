import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondPerilComponent } from './bond-peril.component';

describe('BondPerilComponent', () => {
  let component: BondPerilComponent;
  let fixture: ComponentFixture<BondPerilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondPerilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondPerilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create title', () =>{
  //   expect(component.title == 'Bond Peril').toBeTruthy();
  // })

});
