import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent implements OnInit{
    windowWidth: string;
    showSplash = true;
    ngOnInit(): void {
        setTimeout(() => {
            this.windowWidth = "-" + window.innerWidth + "px";

            setTimeout(() => {
                this.showSplash = !this.showSplash;
            }, 3000);
        }, 4000);
    }
}
