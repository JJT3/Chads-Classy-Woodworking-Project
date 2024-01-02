import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { business } from '../environments/environments';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    businessName = business.name;
    businessAddress = business.address;
    businessPhone = business.phone;
}
