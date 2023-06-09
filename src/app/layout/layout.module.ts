import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { NutrLayoutComponent } from './nutr-layout/nutr-layout.component';
import { AssistantLayoutComponent } from './assistant-layout/assistant-layout.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientLayoutComponent } from './patient-layout/patient-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    NutrLayoutComponent,
    AssistantLayoutComponent,
    PatientLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ]
})
export class LayoutModule { }
