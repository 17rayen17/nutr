import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdtiProfileRoutingModule } from './edti-profile-routing.module';
import { EdtiProfileComponent } from './edti-profile/edti-profile.component';


@NgModule({
  declarations: [
    EdtiProfileComponent
  ],
  imports: [
    CommonModule,
    EdtiProfileRoutingModule
  ]
})
export class EdtiProfileModule { }
