import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsCadastroComponent } from './cons-cadastro.component';

describe('ConsCadastroComponent', () => {
  let component: ConsCadastroComponent;
  let fixture: ComponentFixture<ConsCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
