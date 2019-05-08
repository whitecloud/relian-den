import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenBreadcrumbComponent } from './den-breadcrumb.component';

describe('DenBreadcrumbComponent', () => {
  let component: DenBreadcrumbComponent;
  let fixture: ComponentFixture<DenBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenBreadcrumbComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
