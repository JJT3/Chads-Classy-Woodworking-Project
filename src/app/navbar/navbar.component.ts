import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { business } from '../environments/environments';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    title = business.name;
}
