import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessComponent } from './bussiness.component';

describe('BussinessComponent', () => {
  let component: BussinessComponent;
  let fixture: ComponentFixture<BussinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
