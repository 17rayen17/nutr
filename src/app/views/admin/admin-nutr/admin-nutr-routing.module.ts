import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNutrComponent } from './admin-nutr/admin-nutr.component';

const routes: Routes = [
  {path:'',component:AdminNutrComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminNutrRoutingModule { }
