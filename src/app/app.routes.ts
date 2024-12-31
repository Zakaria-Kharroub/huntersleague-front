import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {path:'',component: HomeComponent  ,canActivate:[authGuard]}, // default route
  {path:'register', component: RegisterComponent},
  {path: 'login' ,component: LoginComponent},
];
