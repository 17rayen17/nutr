import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaiementRoutingModule } from './paiement-routing.module';
import { PaiementComponent } from './paiement/paiement.component';


@NgModule({
  declarations: [
    PaiementComponent
  ],
  imports: [
    CommonModule,
    PaiementRoutingModule
  ]
})
export class PaiementModule { }
