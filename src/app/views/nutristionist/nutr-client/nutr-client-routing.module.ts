import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './nutr-client/add-client/add-client.component';
import { DhashAddPatientComponent } from './nutr-client/dhash-add-patient/dhash-add-patient.component';
import { NutrClientComponent } from './nutr-client/nutr-client.component';
import { ProfilePatientComponent } from './nutr-client/profile-patient/profile-patient.component';
import { StatistiquePatientComponent } from './nutr-client/statistique-patient/statistique-patient.component';
import { FichepatientComponent } from './nutr-client/profile-patient/fichepatient/fichepatient.component';
import { FicheconsultationComponent } from './nutr-client/profile-patient/ficheconsultation/ficheconsultation.component';

const routes: Routes = [
  {
    path: '', component: NutrClientComponent, children: [
      { path:'',component:DhashAddPatientComponent},
      {
        path: 'profile-patient/:id', component: ProfilePatientComponent, children: [
        {path:'fichepatient',component:FichepatientComponent},
        {path:'ficheconsulation',component:FicheconsultationComponent},
      ]},
      { path:'statistique',component:StatistiquePatientComponent },
    ]
  },
 // {path:'addnutr',component:AddClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutrClientRoutingModule { }
