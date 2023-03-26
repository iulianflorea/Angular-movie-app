import {Injectable} from '@angular/core';
import {MovieModel} from "./models/movie.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "./environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieList: Array<MovieModel> = [];

  constructor(private httpClient:HttpClient) {
    this.readMovies();
  }

  addMovie(movie: MovieModel): void {
    this.movieList.push(movie);
    console.log("movie list");
    console.log(this.movieList);
  }

  getMovieList(): Array<MovieModel> {
    return this.movieList;
  }

  createMovie(movie:MovieModel) {
    let body = {
      "title": movie.title,
      "description": movie.description,
      "year": movie.year,
      "director": movie.director
    }
    return this.httpClient.post(`${environment.apiUrl}/api/movie`, body).toPromise().then((response:any) => {
      this.readMovies();
      return response;
    });
  }

  updateMovie(movie:MovieModel) {
    let body = {
      "id": movie.id,
      "title": movie.title,
      "description": movie.description,
      "year": movie.year,
      "director": movie.director
    }
    return this.httpClient.patch(`${environment.apiUrl}/api/movie/${movie.id}`, body).toPromise().then((response:any) => {
      this.readMovies();
      return response;
    });
  }

  deleteMovie(id:string) {
    return this.httpClient.delete(`${environment.apiUrl}/api/movie/${id}`).toPromise().then((response:any) => {
      this.readMovies();
      return response;
    });
  }

  readMovies() {
    return this.httpClient.get(`${environment.apiUrl}/api/movie`).toPromise().then((response:any) => {
      console.log(response);
      this.movieList = response.data;
      return this.movieList;
    });
  }

}
