import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVenueListComponent } from './admin-venue-list.component';

describe('AdminVenueListComponent', () => {
  let component: AdminVenueListComponent;
  let fixture: ComponentFixture<AdminVenueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVenueListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVenueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});