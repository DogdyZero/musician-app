import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTelefoneComponent } from './edit-telefone.component';

describe('EditTelefoneComponent', () => {
  let component: EditTelefoneComponent;
  let fixture: ComponentFixture<EditTelefoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTelefoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
