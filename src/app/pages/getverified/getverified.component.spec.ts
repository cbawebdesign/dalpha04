import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetverifiedComponent } from './getverified.component';

describe('GetverifiedComponent', () => {
  let component: GetverifiedComponent;
  let fixture: ComponentFixture<GetverifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetverifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetverifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
