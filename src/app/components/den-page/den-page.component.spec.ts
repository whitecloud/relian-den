import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenPageComponent } from './den-page.component';

describe('DenPageComponent', () => {
  let component: DenPageComponent;
  let fixture: ComponentFixture<DenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenPageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
