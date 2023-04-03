import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminNutrRoutingModule } from './admin-nutr-routing.module';
import { AdminNutrComponent } from './admin-nutr/admin-nutr.component';
import { CreateNutrComponent } from './admin-nutr/create-nutr/create-nutr.component';

import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminNutrComponent,
    CreateNutrComponent
  ],
  imports: [
    CommonModule,
    AdminNutrRoutingModule,
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
export class AdminNutrModule { }
