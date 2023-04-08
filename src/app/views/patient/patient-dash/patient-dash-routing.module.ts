import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDashComponent } from './patient-dash/patient-dash.component';

const routes: Routes = [
  {path:'',component:PatientDashComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientDashRoutingModule { }
