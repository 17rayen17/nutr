import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileAdminRoutingModule } from './profile-admin-routing.module';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileAdminComponent
  ],
  imports: [
    CommonModule,
    ProfileAdminRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileAdminModule { }
