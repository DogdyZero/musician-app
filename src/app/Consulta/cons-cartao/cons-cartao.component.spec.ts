import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsCartaoComponent } from './cons-cartao.component';

describe('ConsCartaoComponent', () => {
  let component: ConsCartaoComponent;
  let fixture: ComponentFixture<ConsCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
