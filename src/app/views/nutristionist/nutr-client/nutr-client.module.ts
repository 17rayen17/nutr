import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutrClientRoutingModule } from './nutr-client-routing.module';
import { NutrClientComponent } from './nutr-client/nutr-client.component';
import { AddClientComponent } from './nutr-client/add-client/add-client.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilePatientComponent } from './nutr-client/profile-patient/profile-patient.component';
import { DhashAddPatientComponent } from './nutr-client/dhash-add-patient/dhash-add-patient.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';




import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { StatistiquePatientComponent } from './nutr-client/statistique-patient/statistique-patient.component';
import { FichepatientComponent } from './nutr-client/profile-patient/fichepatient/fichepatient.component';
import { FicheconsultationComponent } from './nutr-client/profile-patient/ficheconsultation/ficheconsultation.component';
import { FicheRegimeComponent } from './nutr-client/profile-patient/fiche-regime/fiche-regime.component';





@NgModule({
  declarations: [
    NutrClientComponent,
    AddClientComponent,
    ProfilePatientComponent,
    DhashAddPatientComponent,
    StatistiquePatientComponent,
    FichepatientComponent,
    FicheconsultationComponent,
    FicheRegimeComponent
  ],
  imports: [
    CommonModule,
    NutrClientRoutingModule,
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
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    DragDropModule,
    MatAutocompleteModule,
    FormsModule
  ]
})
export class NutrClientModule { }
