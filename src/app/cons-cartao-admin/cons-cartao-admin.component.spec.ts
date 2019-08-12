import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsCartaoAdminComponent } from './cons-cartao-admin.component';

describe('ConsCartaoAdminComponent', () => {
  let component: ConsCartaoAdminComponent;
  let fixture: ComponentFixture<ConsCartaoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsCartaoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsCartaoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
