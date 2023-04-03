import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistDashboardComponent } from './assist-dashboard/assist-dashboard.component';

const routes: Routes = [
  {path:'',component:AssistDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistDAshboardRoutingModule { }
