import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';



import { NutrDashboardRoutingModule } from './nutr-dashboard-routing.module';
import { NutrDashboardComponent } from './nutr-dashboard/nutr-dashboard.component';
import { ClickoutsideDirective } from './clickoutside.directive';



@NgModule({
  declarations: [
    NutrDashboardComponent,
    ClickoutsideDirective
  ],
  imports: [
    CommonModule,
    NutrDashboardRoutingModule,
    FormsModule,
    MatTooltipModule,
    MatBadgeModule,
    MatButtonModule,
    MatSnackBarModule,
    ToastrModule.forRoot()
  ]
})
export class NutrDashboardModule { }
