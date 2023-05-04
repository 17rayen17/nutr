import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistProfileRoutingModule } from './assist-profile-routing.module';
import { AssistProfileComponent } from './assist-profile/assist-profile.component';
import { EditProfileComponent } from './assist-profile/edit-profile/edit-profile.component';
import { ProfileComponent } from './assist-profile/profile/profile.component';


@NgModule({
  declarations: [
    AssistProfileComponent,
    EditProfileComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AssistProfileRoutingModule
  ]
})
export class AssistProfileModule { }
