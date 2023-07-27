import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddeventsComponent } from './addevents.component';

describe('AddeventsComponent', () => {
  let component: AddeventsComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AddeventsComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(AddeventsComponent);
    component = fixture.componentInstance;
  });
  it('FE_addEventsTest', () => {
    expect(component).toBeTruthy();
  });
});