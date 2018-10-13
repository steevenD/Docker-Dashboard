import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesEnvComponent } from './variables-env.component';

describe('VariablesEnvComponent', () => {
  let component: VariablesEnvComponent;
  let fixture: ComponentFixture<VariablesEnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablesEnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
