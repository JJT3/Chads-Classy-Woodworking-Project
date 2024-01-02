import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopLandingComponent } from '../top-landing/top-landing.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-for-sale',
  standalone: true,
  imports: [CommonModule, TopLandingComponent, NavbarComponent, FooterComponent],
  templateUrl: './for-sale.component.html',
  styleUrl: './for-sale.component.scss'
})
export class ForSaleComponent {
    currentPage = "For Sale";
    topLandingBanner = "woodbanner4";
}
