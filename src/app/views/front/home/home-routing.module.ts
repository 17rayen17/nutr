import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturesComponent } from './features/features.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-landing', component: HomeLandingComponent },
  { path: 'features', component: FeaturesComponent,data: { state: 'features' } },
  { path: 'contact', component: ContactUsComponent,data: { state: 'contact' } },
  { path: 'about', component: AboutUsComponent,data: { state: 'about' } },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
