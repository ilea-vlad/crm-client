import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AgentRoutingModule} from './agent-routing.module';
import {MainAgentPageComponent} from './components/main-agent-page/main-agent-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {ManagerModule} from '../manager/manager.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [MainAgentPageComponent],
  imports: [
    CommonModule,
    AgentRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    ManagerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MainAgentPageComponent
  ]
})
export class AgentModule {
}
