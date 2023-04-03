import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAsisstantComponent } from './admin-asisstant/admin-asisstant.component';

const routes: Routes = [
  {path:'',component:AdminAsisstantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAssistantRoutingModule { }
