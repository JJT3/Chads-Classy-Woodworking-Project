import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TopLandingComponent } from '../top-landing/top-landing.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, TopLandingComponent, NavbarComponent, FooterComponent],
})

export class ContactComponent {
    currentPage = "Contact Us";
    topLandingBanner = "woodbanner3";
    contactUsForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        msg: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
    onSubmit(){
        console.log(this.contactUsForm.value);
        alert("Submission accepted!");
    }

}