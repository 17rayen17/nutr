import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistAgendaComponent } from './assist-agenda/assist-agenda.component';

const routes: Routes = [
  {path:'',component:AssistAgendaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistAgendaRoutingModule { }
