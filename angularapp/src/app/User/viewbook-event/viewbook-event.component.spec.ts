import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookEventComponent } from './viewbook-event.component';

describe('ViewbookEventComponent', () => {
  let component: ViewbookEventComponent;
  let fixture: ComponentFixture<ViewbookEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
