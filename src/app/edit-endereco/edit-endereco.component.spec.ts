import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnderecoComponent } from './edit-endereco.component';

describe('EditEnderecoComponent', () => {
  let component: EditEnderecoComponent;
  let fixture: ComponentFixture<EditEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
