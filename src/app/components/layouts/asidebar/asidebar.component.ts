import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-asidebar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './asidebar.component.html',
  styleUrl: './asidebar.component.css'
})
export class AsidebarComponent {

}
