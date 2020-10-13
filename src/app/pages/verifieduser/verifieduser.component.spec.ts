import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifieduserComponent } from './verifieduser.component';

describe('VerifieduserComponent', () => {
  let component: VerifieduserComponent;
  let fixture: ComponentFixture<VerifieduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifieduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifieduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
