import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { AssistAgendaRoutingModule } from './assist-agenda-routing.module';
import { AssistAgendaComponent } from './assist-agenda/assist-agenda.component';


@NgModule({
  declarations: [
    AssistAgendaComponent
  ],
  imports: [
    CommonModule,
    AssistAgendaRoutingModule,
    FullCalendarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class AssistAgendaModule { }
