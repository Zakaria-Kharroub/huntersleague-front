import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {path:'',component: HomeComponent}, // default route
  {path:'register', component: RegisterComponent},
  {path: 'login' ,component: LoginComponent},
];
