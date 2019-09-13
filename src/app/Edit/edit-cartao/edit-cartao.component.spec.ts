import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCartaoComponent } from './edit-cartao.component';

describe('EditCartaoComponent', () => {
  let component: EditCartaoComponent;
  let fixture: ComponentFixture<EditCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
