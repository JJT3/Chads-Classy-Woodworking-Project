import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-landing.component.html',
  styleUrl: './top-landing.component.scss'
})
export class TopLandingComponent {
    @Input() pageName = '';
    @Input() woodBanner = '';
}
