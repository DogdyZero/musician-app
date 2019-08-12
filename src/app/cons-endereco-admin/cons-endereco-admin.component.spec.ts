import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsEnderecoAdminComponent } from './cons-endereco-admin.component';

describe('ConsEnderecoAdminComponent', () => {
  let component: ConsEnderecoAdminComponent;
  let fixture: ComponentFixture<ConsEnderecoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsEnderecoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsEnderecoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
