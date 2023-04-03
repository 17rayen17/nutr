import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAssistantRoutingModule } from './admin-assistant-routing.module';
import { AdminAsisstantComponent } from './admin-asisstant/admin-asisstant.component';
import { CreateAdminAsisstComponent } from './admin-asisstant/create-admin-asisst/create-admin-asisst.component';

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
    AdminAsisstantComponent,
    CreateAdminAsisstComponent
  ],
  imports: [
    CommonModule,
    AdminAssistantRoutingModule,
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
export class AdminAssistantModule { }
