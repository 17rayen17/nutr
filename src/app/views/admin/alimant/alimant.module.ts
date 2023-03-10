import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimantRoutingModule } from './alimant-routing.module';
import { AlimantComponent } from './alimant/alimant.component';


@NgModule({
  declarations: [
    AlimantComponent
  ],
  imports: [
    CommonModule,
    AlimantRoutingModule
  ]
})
export class AlimantModule { }
