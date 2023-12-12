import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusscheduleComponent } from './busschedule.component';

describe('BusscheduleComponent', () => {
  let component: BusscheduleComponent;
  let fixture: ComponentFixture<BusscheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusscheduleComponent]
    });
    fixture = TestBed.createComponent(BusscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
