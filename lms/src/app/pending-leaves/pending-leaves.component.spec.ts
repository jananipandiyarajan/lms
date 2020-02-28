import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLeavesComponent } from './pending-leaves.component';

describe('PendingLeavesComponent', () => {
  let component: PendingLeavesComponent;
  let fixture: ComponentFixture<PendingLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingLeavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
