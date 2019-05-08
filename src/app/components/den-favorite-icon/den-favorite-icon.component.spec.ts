import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenFavoriteIconComponent } from './den-favorite-icon.component';

describe('DenFavoriteIconComponent', () => {
  let component: DenFavoriteIconComponent;
  let fixture: ComponentFixture<DenFavoriteIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenFavoriteIconComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenFavoriteIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
