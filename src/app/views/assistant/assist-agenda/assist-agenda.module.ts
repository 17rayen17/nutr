import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AssistAgendaRoutingModule } from './assist-agenda-routing.module';
import { AssistAgendaComponent } from './assist-agenda/assist-agenda.component';
import { AddAgendaAssistComponent } from './assist-agenda/add-agenda-assist/add-agenda-assist.component';


@NgModule({
  declarations: [
    AssistAgendaComponent,
    AddAgendaAssistComponent
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
    MatButtonModule,
    MatTooltipModule
  ]
})
export class AssistAgendaModule { }
