import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeShowAllComponent } from './employee-show-all.component';

describe('EmployeeShowAllComponent', () => {
  let component: EmployeeShowAllComponent;
  let fixture: ComponentFixture<EmployeeShowAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeShowAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeShowAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
