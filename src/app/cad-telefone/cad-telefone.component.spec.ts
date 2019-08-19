import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadTelefoneComponent } from './cad-telefone.component';

describe('CadTelefoneComponent', () => {
  let component: CadTelefoneComponent;
  let fixture: ComponentFixture<CadTelefoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadTelefoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
