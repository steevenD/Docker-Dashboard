import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableEnvComponent } from './variable-env.component';

describe('VariableEnvComponent', () => {
  let component: VariableEnvComponent;
  let fixture: ComponentFixture<VariableEnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableEnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
