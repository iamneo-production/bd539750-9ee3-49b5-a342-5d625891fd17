import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookEventComponent } from './update-book-event.component';

describe('UpdateBookEventComponent', () => {
  let component: UpdateBookEventComponent;
  let fixture: ComponentFixture<UpdateBookEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBookEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
