import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDashRoutingModule } from './patient-dash-routing.module';
import { PatientDashComponent } from './patient-dash/patient-dash.component';


@NgModule({
  declarations: [
    PatientDashComponent
  ],
  imports: [
    CommonModule,
    PatientDashRoutingModule
  ]
})
export class PatientDashModule { }
