import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookedEventComponent } from './view-booked-event.component';

describe('ViewBookedEventComponent', () => {
  let component: ViewBookedEventComponent;
  let fixture: ComponentFixture<ViewBookedEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookedEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
