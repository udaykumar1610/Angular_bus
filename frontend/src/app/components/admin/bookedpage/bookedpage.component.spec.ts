import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedpageComponent } from './bookedpage.component';

describe('BookedpageComponent', () => {
  let component: BookedpageComponent;
  let fixture: ComponentFixture<BookedpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookedpageComponent]
    });
    fixture = TestBed.createComponent(BookedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
