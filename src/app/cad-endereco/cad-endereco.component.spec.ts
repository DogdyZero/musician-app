import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEnderecoComponent } from './cad-endereco.component';

describe('CadEnderecoComponent', () => {
  let component: CadEnderecoComponent;
  let fixture: ComponentFixture<CadEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
