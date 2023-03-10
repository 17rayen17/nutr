import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { HomeComponent } from './views/front/home/home/home.component';

const routes: Routes = [
  {
    path: '', component: FrontLayoutComponent, children: [
      { path: '', loadChildren: () => import('./views/front/home/home.module').then(m => m.HomeModule) },
      // { path: 'home-landing', loadChildren: () => import('./views/front/home-landing/home-landing.module').then(m => m.HomeLandingModule) },
      // { path: 'features', loadChildren: () => import('./views/front/features/features.module').then(m => m.FeaturesModule) },
      // { path: 'contact', loadChildren: () => import('./views/front/contact-us/contact-us.module').then(m => m.ContactUsModule) },
      // { path: 'about', loadChildren: () => import('./views/front/about-us/about-us.module').then(m => m.AboutUsModule) },

  ]},

  {
    path: 'admin', component: AdminLayoutComponent, children: [
      {path:'',loadChildren:()=>import('./views/admin/profile-admin/profile-admin.module').then(m=>m.ProfileAdminModule)},
      { path: 'dashboard', loadChildren: () => import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'alimant', loadChildren: () => import('./views/admin/alimant/alimant.module').then(m => m.AlimantModule) },
      { path: 'loginadmin', loadChildren: () => import('./views/admin/loginadmin/loginadmin.module').then(m => m.LoginadminModule) },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
