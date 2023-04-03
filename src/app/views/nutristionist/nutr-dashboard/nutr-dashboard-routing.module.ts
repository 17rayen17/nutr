import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutrDashboardComponent } from './nutr-dashboard/nutr-dashboard.component';

const routes: Routes = [
  {path:'',component:NutrDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutrDashboardRoutingModule { }
