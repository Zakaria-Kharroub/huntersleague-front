import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {AuthService} from "../../../services/auth.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private authService:AuthService) {}
  isAuthenticated():boolean{
    return !this.authService.isAuthenticated();
  }
  logout():void{
    this.authService.logout();
  }

}
