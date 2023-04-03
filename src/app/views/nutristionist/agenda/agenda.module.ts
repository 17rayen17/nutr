import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda/agenda.component';
import { AddAppointmentsComponent } from './agenda/add-appointments/add-appointments.component';


@NgModule({
  declarations: [
    AgendaComponent,
    AddAppointmentsComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    FullCalendarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class AgendaModule { }
