import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {AuthComponent} from "../auth/auth.component";
import {AuthGuard} from "../auth/auth.guard";



const routes:Routes = [
  {
    path:"dashboard", component:DashboardComponent, canActivate:[AuthGuard], canMatch:[AuthGuard],
  },
  {
    path:"auth", component:AuthComponent
  },
  {
    path:"", redirectTo: "auth", pathMatch: "full"
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
