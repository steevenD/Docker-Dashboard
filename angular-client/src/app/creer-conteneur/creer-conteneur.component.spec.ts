import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerConteneurComponent } from './creer-conteneur.component';

describe('CreerConteneurComponent', () => {
  let component: CreerConteneurComponent;
  let fixture: ComponentFixture<CreerConteneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerConteneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerConteneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
