import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MovieService} from "../movie.service";
import {MovieModel} from "../models/movie.model";

@Component({
  selector: 'app-add-edit-delete-movie',
  templateUrl: './add-edit-delete-movie.component.html',
  styleUrls: ['./add-edit-delete-movie.component.css']
})
export class AddEditDeleteMovieComponent implements OnChanges {
  @Input("movie") movie: MovieModel = {id: "", title: "", description: "", year: "", director: ""};

  id: string = "";
  title = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  year = new FormControl('', [Validators.required]);
  director = new FormControl('', [Validators.required]);

  constructor(private movieService: MovieService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Add edit delete movie");
    console.log(this.movie);
    this.id = this.movie.id!;
    this.title = new FormControl(this.movie.title, [Validators.required]);
    this.description = new FormControl(this.movie.description, [Validators.required]);
    this.year = new FormControl(this.movie.year, [Validators.required]);
    this.director = new FormControl(this.movie.director, [Validators.required]);
    }

  getErrorMessage(formControl: FormControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }

    return "";
  }

  onSave(): void {
    let movie: MovieModel = {
      id: this.id,
      title: this.title.getRawValue()!,
      description: this.description.getRawValue()!,
      year: this.year.getRawValue()!,
      director: this.director.getRawValue()!
    };

    if(movie.id == "") {
      this.movieService.createMovie(movie).then((response: any) => {
        console.log(response);
        alert(response.message);
      })
    } else {
      this.movieService.updateMovie(movie).then((response: any) => {
        console.log(response);
        alert(response.message);
      })
    }

    console.log(movie)
    // this.movieService.addMovie(movie);
  }

  onDelete(): void {
    this.movieService.deleteMovie(this.id).then((response: any) => {
      console.log(response);
      alert(response.message);
    })
  }
}
