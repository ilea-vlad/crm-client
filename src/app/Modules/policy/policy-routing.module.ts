import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GetClientPolicyComponent} from './components/get-client-policy/get-client-policy.component';

const routes: Routes = [
  {
    path: 'policy/client/:id',
    component: GetClientPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyRoutingModule {
}
