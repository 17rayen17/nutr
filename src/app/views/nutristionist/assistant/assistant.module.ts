import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistantRoutingModule } from './assistant-routing.module';
import { AssistantComponent } from './assistant/assistant.component';


import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAssistComponent } from './assistant/add-assist/add-assist.component';

@NgModule({
  declarations: [
    AssistantComponent,
    AddAssistComponent
  ],
  imports: [
    CommonModule,
    AssistantRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class AssistantModule { }
