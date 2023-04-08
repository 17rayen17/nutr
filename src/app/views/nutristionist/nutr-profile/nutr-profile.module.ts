import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutrProfileRoutingModule } from './nutr-profile-routing.module';
import { NutrProfileComponent } from './nutr-profile/nutr-profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthinterceptorInterceptor } from 'src/app/services/authinterceptor.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;


@NgModule({
  declarations: [
    NutrProfileComponent
  ],
  imports: [
    CommonModule,
    NutrProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthinterceptorInterceptor,
    multi:true
  }]
})
export class NutrProfileModule { }
