import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistProfileComponent } from './assist-profile/assist-profile.component';
import { EditProfileComponent } from './assist-profile/edit-profile/edit-profile.component';
import { ProfileComponent } from './assist-profile/profile/profile.component';

const routes: Routes = [
  {
    path: '', component: AssistProfileComponent, children: [
    {path:'',component:ProfileComponent},
    {path:'settings',component:EditProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistProfileRoutingModule { }
