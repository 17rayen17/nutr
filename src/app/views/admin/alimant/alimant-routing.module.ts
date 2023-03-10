import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimantComponent } from './alimant/alimant.component';

const routes: Routes = [
  {path:'',component:AlimantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimantRoutingModule { }
