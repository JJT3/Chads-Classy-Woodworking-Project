import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ForSaleComponent } from './for-sale/for-sale.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'for-sale', component: ForSaleComponent},
    {path: '', redirectTo: "/home", pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

