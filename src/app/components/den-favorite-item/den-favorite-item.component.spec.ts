import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenFavoriteItemComponent } from './den-favorite-item.component';

describe('DenFavoriteItemComponent', () => {
  let component: DenFavoriteItemComponent;
  let fixture: ComponentFixture<DenFavoriteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenFavoriteItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenFavoriteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
