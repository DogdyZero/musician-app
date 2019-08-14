import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaAdminComponent } from './troca-admin.component';

describe('TrocaAdminComponent', () => {
  let component: TrocaAdminComponent;
  let fixture: ComponentFixture<TrocaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
