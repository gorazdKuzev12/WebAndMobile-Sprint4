import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApartmentFavoritePage } from './apartment-favorite.page';

describe('ApartmentFavoritePage', () => {
  let component: ApartmentFavoritePage;
  let fixture: ComponentFixture<ApartmentFavoritePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApartmentFavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
