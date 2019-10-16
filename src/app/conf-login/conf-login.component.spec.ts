import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfLoginComponent } from './conf-login.component';

describe('ConfLoginComponent', () => {
  let component: ConfLoginComponent;
  let fixture: ComponentFixture<ConfLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
