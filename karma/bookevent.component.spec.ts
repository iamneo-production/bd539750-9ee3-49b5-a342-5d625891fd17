import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookeventComponent } from './bookevent.component';

describe('BookeventComponent', () => {
  let component: BookeventComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [BookeventComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(BookeventComponent);
    component = fixture.componentInstance;
  });
  it('FE_bookEventTest', () => {
    expect(component).toBeTruthy();
  });
});