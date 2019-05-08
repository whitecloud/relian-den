import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenActivityItemComponent } from './den-activity-item.component';

describe('DenActivityItemComponent', () => {
  let component: DenActivityItemComponent;
  let fixture: ComponentFixture<DenActivityItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenActivityItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenActivityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
