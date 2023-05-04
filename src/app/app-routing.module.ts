import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AssistantLayoutComponent } from './layout/assistant-layout/assistant-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { NutrLayoutComponent } from './layout/nutr-layout/nutr-layout.component';
import { HomeComponent } from './views/front/home/home/home.component';
import { PatientLayoutComponent } from './layout/patient-layout/patient-layout.component';

const routes: Routes = [
  {
    path: '', component: FrontLayoutComponent, children: [
      { path: '', loadChildren: () => import('./views/front/home/home.module').then(m => m.HomeModule) },
  ]},

  {
    path: 'admin/:id', component: AdminLayoutComponent,canActivate:[AuthGuard] ,children: [
      {path:'',loadChildren:()=>import('./views/admin/profile-admin/profile-admin.module').then(m=>m.ProfileAdminModule)},
      {path:'admin-nutr',loadChildren:()=>import('./views/admin/admin-nutr/admin-nutr.module').then(m=>m.AdminNutrModule)},
      {path:'admin-assistant',loadChildren:()=>import('./views/admin/admin-assistant/admin-assistant.module').then(m=>m.AdminAssistantModule)},
      { path: 'aliment', loadChildren: () => import('./views/admin/alimant/alimant.module').then(m => m.AlimantModule) },
      { path: 'paiement', loadChildren: () => import('./views/admin/paiement/paiement.module').then(m => m.PaiementModule) },
    ]
  },

  {
    path: 'nutritionist/:id', component: NutrLayoutComponent,canActivate:[AuthGuard], children: [
      { path: '', loadChildren: () => import('./views/nutristionist/nutr-dashboard/nutr-dashboard.module').then(m => m.NutrDashboardModule) },
      {path:'patient',loadChildren:()=>import('./views/nutristionist/nutr-client/nutr-client.module').then(m=>m.NutrClientModule) },
      {path:'agenda',loadChildren:()=>import('./views/nutristionist/agenda/agenda.module').then(m=>m.AgendaModule) },
      {path:'nutr-profile',loadChildren:()=>import('./views/nutristionist/nutr-profile/nutr-profile.module').then(m=>m.NutrProfileModule) },
      {path:'assistant',loadChildren:()=>import('./views/nutristionist/assistant/assistant.module').then(m=>m.AssistantModule) },
    ]
  },
  {
    path: 'assistant/:id', component: AssistantLayoutComponent,canActivate:[AuthGuard], children: [
      { path: '', loadChildren: () => import('./views/assistant/assist-dashboard/assist-dashboard.module').then(m => m.AssistDAshboardModule) },
      { path: 'assist-agenda', loadChildren: () => import('./views/assistant/assist-agenda/assist-agenda.module').then(m => m.AssistAgendaModule) },
      { path: 'assist-patient', loadChildren: () => import('./views/assistant/assist-patient/assist-patient.module').then(m => m.AssistPatientModule) },
      { path: 'assist-profile', loadChildren: () => import('./views/assistant/assist-profile/assist-profile.module').then(m => m.AssistProfileModule) },
    ]
  },
  {
    path: 'patient/:id', component: PatientLayoutComponent,canActivate:[AuthGuard], children: [
    {path:'',loadChildren:()=>import('./views/patient/patient-dash/patient-dash/patient-dash.module').then(m => m.PatientDashModule)},
    {path:'settings',loadChildren:()=>import('./views/patient/patient-dash/edti-profile/edti-profile.module').then(m => m.EdtiProfileModule)}
  ]},

  {path:'**',redirectTo:'/'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
