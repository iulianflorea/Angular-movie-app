import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteMovieComponent } from './add-edit-delete-movie.component';

describe('AddEditDeleteMovieComponent', () => {
  let component: AddEditDeleteMovieComponent;
  let fixture: ComponentFixture<AddEditDeleteMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeleteMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDeleteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
