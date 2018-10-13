import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangePickrComponent } from './date-range-pickr.component';

describe('DateRangePickrComponent', () => {
  let component: DateRangePickrComponent;
  let fixture: ComponentFixture<DateRangePickrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateRangePickrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangePickrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
