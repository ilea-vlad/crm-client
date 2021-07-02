import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainAgentPageComponent} from './components/main-agent-page/main-agent-page.component';
import {AuthGuard} from '../../Services/auth.guard';

const routes: Routes = [
  {
    path: 'agent', component: MainAgentPageComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule {
}
