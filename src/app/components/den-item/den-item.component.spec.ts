import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenItemComponent } from './den-item.component';

describe('DenItemComponent', () => {
  let component: DenItemComponent;
  let fixture: ComponentFixture<DenItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
