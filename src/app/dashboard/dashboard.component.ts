import {Component} from '@angular/core';
import {MovieModel} from "../models/movie.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedMovie: MovieModel = {id: "", title: "", description: "", year: "", director: ""};

  onChangeData(movie: MovieModel): void {
    console.log("dashboard on change data");
    console.log(movie);
    this.selectedMovie = movie;
  }

}
