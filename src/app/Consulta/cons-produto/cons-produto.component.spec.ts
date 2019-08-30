import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsProdutoComponent } from './cons-produto.component';

describe('ConsProdutoComponent', () => {
  let component: ConsProdutoComponent;
  let fixture: ComponentFixture<ConsProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
