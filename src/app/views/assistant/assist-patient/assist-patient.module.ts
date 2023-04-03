import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AssistPatientRoutingModule } from './assist-patient-routing.module';
import { AssistPatientComponent } from './assist-patient/assist-patient.component';
import { AssistAddPatientComponent } from './assist-patient/assist-add-patient/assist-add-patient.component';


@NgModule({
  declarations: [
    AssistPatientComponent,
    AssistAddPatientComponent
  ],
  imports: [
    CommonModule,
    AssistPatientRoutingModule,
    MatDialogModule,
    MatSelectModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AssistPatientModule { }
