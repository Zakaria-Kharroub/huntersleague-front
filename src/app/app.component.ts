import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from "@angular/common";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'huntersleaguefront';
  constructor(private authService:AuthService) {}

  isAuthenticated():boolean{
    return !this.authService.isAuthenticated();
  }
  logout():void{
    this.authService.logout();
  }

}
