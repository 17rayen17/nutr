import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginadminRoutingModule } from './loginadmin-routing.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginAdminComponent
  ],
  imports: [
    CommonModule,
    LoginadminRoutingModule,
    RouterModule
  ]
})
export class LoginadminModule { }
