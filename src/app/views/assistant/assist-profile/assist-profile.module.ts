import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistProfileRoutingModule } from './assist-profile-routing.module';
import { AssistProfileComponent } from './assist-profile/assist-profile.component';


@NgModule({
  declarations: [
    AssistProfileComponent
  ],
  imports: [
    CommonModule,
    AssistProfileRoutingModule
  ]
})
export class AssistProfileModule { }
