import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistProfileComponent } from './assist-profile/assist-profile.component';

const routes: Routes = [
  {path:'',component:AssistProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistProfileRoutingModule { }
