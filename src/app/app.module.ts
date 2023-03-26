import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatLegacyFormFieldModule} from "@angular/material/legacy-form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditDeleteMovieComponent } from './add-edit-delete-movie/add-edit-delete-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    AddEditDeleteMovieComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
