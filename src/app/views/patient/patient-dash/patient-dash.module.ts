import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDashRoutingModule } from './patient-dash-routing.module';
import { PatientDashComponent } from './patient-dash/patient-dash.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;


@NgModule({
  declarations: [
    PatientDashComponent
  ],
  imports: [
    CommonModule,
    PatientDashRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class PatientDashModule { }
