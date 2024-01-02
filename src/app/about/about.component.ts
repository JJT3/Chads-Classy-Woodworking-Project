import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopLandingComponent } from '../top-landing/top-landing.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TopLandingComponent, NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
    currentPage = "About Us";
    topLandingBanner = "woodbanner2";
}
