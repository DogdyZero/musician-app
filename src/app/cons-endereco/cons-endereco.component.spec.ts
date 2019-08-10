import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsEnderecoComponent } from './cons-endereco.component';

describe('ConsEnderecoComponent', () => {
  let component: ConsEnderecoComponent;
  let fixture: ComponentFixture<ConsEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
