import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenFavoritesListComponent } from './den-favorites-list.component';

describe('DenFavoritesListComponent', () => {
  let component: DenFavoritesListComponent;
  let fixture: ComponentFixture<DenFavoritesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenFavoritesListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenFavoritesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
