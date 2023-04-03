import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistDAshboardRoutingModule } from './assist-dashboard-routing.module';
import { AssistDashboardComponent } from './assist-dashboard/assist-dashboard.component';


@NgModule({
  declarations: [
    AssistDashboardComponent
  ],
  imports: [
    CommonModule,
    AssistDAshboardRoutingModule
  ]
})
export class AssistDAshboardModule { }
