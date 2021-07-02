import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GetClientsComponent} from './component/get-clients/get-clients.component';
import {UpdateClientsComponent} from './component/update-clients/update-clients.component';
import {AuthGuard} from '../../Services/auth.guard';

const routes: Routes = [
  {path: 'client', component: GetClientsComponent, canActivate: [AuthGuard]},
  {path: 'client/:id', component: UpdateClientsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
