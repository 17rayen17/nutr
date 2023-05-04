import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutrProfileComponent } from './nutr-profile/nutr-profile.component';
import { ProfileComponent } from './nutr-profile/profile/profile.component';
import { EditProfileComponent } from './nutr-profile/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '', component: NutrProfileComponent, children: [
      { path: '', component: ProfileComponent },
      {path:'settings',component:EditProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutrProfileRoutingModule { }
