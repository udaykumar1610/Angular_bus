import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedPagesComponent } from './booked-pages.component';

describe('BookedPagesComponent', () => {
  let component: BookedPagesComponent;
  let fixture: ComponentFixture<BookedPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookedPagesComponent]
    });
    fixture = TestBed.createComponent(BookedPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
