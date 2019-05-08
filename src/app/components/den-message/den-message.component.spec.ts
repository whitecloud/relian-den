import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenMessageComponent } from './den-message.component';

describe('DenMessageComponent', () => {
  let component: DenMessageComponent;
  let fixture: ComponentFixture<DenMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenMessageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
