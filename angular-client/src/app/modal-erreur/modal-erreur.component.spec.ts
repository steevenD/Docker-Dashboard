import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalErreurComponent } from './modal-erreur.component';

describe('ModalErreurComponent', () => {
  let component: ModalErreurComponent;
  let fixture: ComponentFixture<ModalErreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalErreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
