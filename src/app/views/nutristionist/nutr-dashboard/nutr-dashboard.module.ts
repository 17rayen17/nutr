import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NutrDashboardRoutingModule } from './nutr-dashboard-routing.module';
import { NutrDashboardComponent } from './nutr-dashboard/nutr-dashboard.component';


@NgModule({
  declarations: [
    NutrDashboardComponent
  ],
  imports: [
    CommonModule,
    NutrDashboardRoutingModule,
    FormsModule
  ]
})
export class NutrDashboardModule { }
