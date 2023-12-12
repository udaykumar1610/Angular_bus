import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancilationComponent } from './cancilation.component';

describe('CancilationComponent', () => {
  let component: CancilationComponent;
  let fixture: ComponentFixture<CancilationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancilationComponent]
    });
    fixture = TestBed.createComponent(CancilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
