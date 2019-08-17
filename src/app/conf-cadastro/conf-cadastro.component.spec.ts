import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfCadastroComponent } from './conf-cadastro.component';

describe('ConfCadastroComponent', () => {
  let component: ConfCadastroComponent;
  let fixture: ComponentFixture<ConfCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
