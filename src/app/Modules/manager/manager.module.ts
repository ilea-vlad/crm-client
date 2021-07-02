import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { AgentChartComponent } from './components/agent-chart/agent-chart.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [AgentChartComponent],
    imports: [
        CommonModule,
        ManagerRoutingModule,
        ChartsModule
    ],
  exports : [
    AgentChartComponent
  ]
})
export class ManagerModule { }
