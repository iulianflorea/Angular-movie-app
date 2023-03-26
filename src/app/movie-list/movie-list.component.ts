import {AfterContentChecked, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MovieService} from "../movie.service";
import {MovieModel} from "../models/movie.model";
import {logCumulativeDurations} from "@angular-devkit/build-angular/src/builders/browser-esbuild/profiling";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, AfterContentChecked {
  @Output() changeData: EventEmitter<MovieModel> = new EventEmitter<MovieModel>();

  movieList: Array<MovieModel> = [];

  constructor(private movieService: MovieService) {

  }

  ngAfterContentChecked(): void {
    this.getMovies();
  }

  ngOnInit() {
    // this.movieList = this.movieService.getMovieList();
    this.getMovies();
  }

  onDelete(movie: MovieModel): void {
    console.log(movie);
    // movie.id! => ! ii spune compilatorului ca proprietatea "id" este diferita de null.
    this.movieService.deleteMovie(movie.id!).then((response: any) => {
      console.log(response);
      alert(response.message);
      this.getMovies();
    })
  }

  onEdit(movie: MovieModel): void {
    console.log("movie list on edit")
    console.log(movie);
    this.changeData.emit(movie);
  }

  private getMovies(): void {
    this.movieList = this.movieService.getMovieList();
  }
}
