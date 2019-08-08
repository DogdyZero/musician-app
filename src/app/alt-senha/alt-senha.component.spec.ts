import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltSenhaComponent } from './alt-senha.component';

describe('AltSenhaComponent', () => {
  let component: AltSenhaComponent;
  let fixture: ComponentFixture<AltSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
