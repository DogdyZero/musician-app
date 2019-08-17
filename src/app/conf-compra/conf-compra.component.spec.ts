import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfCompraComponent } from './conf-compra.component';

describe('ConfCompraComponent', () => {
  let component: ConfCompraComponent;
  let fixture: ComponentFixture<ConfCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
