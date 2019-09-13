import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsCadastroAdminComponent } from './cons-cadastro-admin.component';

describe('ConsCadastroAdminComponent', () => {
  let component: ConsCadastroAdminComponent;
  let fixture: ComponentFixture<ConsCadastroAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsCadastroAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsCadastroAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
