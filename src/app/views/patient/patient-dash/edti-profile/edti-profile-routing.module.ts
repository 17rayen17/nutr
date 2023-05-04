import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdtiProfileComponent } from './edti-profile/edti-profile.component';

const routes: Routes = [
  {path:'',component:EdtiProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdtiProfileRoutingModule { }
