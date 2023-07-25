import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApplyformComponent } from './applyform.component';

describe('ApplyformComponent', () => {
  let component: ApplyformComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [ApplyformComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(ApplyformComponent);
    component = fixture.componentInstance;
  });
  it('FE_applyFormTest', () => {
    expect(component).toBeTruthy();
  });
});