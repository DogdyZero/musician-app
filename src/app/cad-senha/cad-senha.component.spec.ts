import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadSenhaComponent } from './cad-senha.component';

describe('CadSenhaComponent', () => {
  let component: CadSenhaComponent;
  let fixture: ComponentFixture<CadSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
