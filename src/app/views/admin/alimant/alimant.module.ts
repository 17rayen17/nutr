import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimantRoutingModule } from './alimant-routing.module';
import { AlimantComponent } from './alimant/alimant.component';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { CreateAlimentComponent } from './alimant/create-aliment/create-aliment.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlimantComponent,
    CreateAlimentComponent
  ],
  imports: [
    CommonModule,
    AlimantRoutingModule,
    MatDialogModule,
    MatSelectModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AlimantModule { }
