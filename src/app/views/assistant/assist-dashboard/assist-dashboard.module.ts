import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistDAshboardRoutingModule } from './assist-dashboard-routing.module';
import { AssistDashboardComponent } from './assist-dashboard/assist-dashboard.component';
import { ClickoutsideDirective } from './clickoutside.directive';


@NgModule({
  declarations: [
    AssistDashboardComponent,
    ClickoutsideDirective
  ],
  imports: [
    CommonModule,
    AssistDAshboardRoutingModule
  ]
})
export class AssistDAshboardModule { }
