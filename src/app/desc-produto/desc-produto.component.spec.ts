import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescProdutoComponent } from './desc-produto.component';

describe('DescProdutoComponent', () => {
  let component: DescProdutoComponent;
  let fixture: ComponentFixture<DescProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
