import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopLandingComponent } from '../top-landing/top-landing.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeCarouselComponent } from '../home-carousel/home-carousel.component';
import { FooterComponent } from '../footer/footer.component';
import { business } from '../environments/environments';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TopLandingComponent, NavbarComponent, HomeCarouselComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
    currentPage = "Home";
    topLandingBanner = "woodbanner1";
    businessName = business.name;
    businessSlogan = business.slogan;
}
