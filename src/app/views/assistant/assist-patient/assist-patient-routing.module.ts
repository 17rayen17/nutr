import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistPatientComponent } from './assist-patient/assist-patient.component';

const routes: Routes = [
  {path:'',component:AssistPatientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistPatientRoutingModule { }
