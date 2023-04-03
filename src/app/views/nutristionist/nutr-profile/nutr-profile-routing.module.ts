import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutrProfileComponent } from './nutr-profile/nutr-profile.component';

const routes: Routes = [
  {path:'',component:NutrProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutrProfileRoutingModule { }
