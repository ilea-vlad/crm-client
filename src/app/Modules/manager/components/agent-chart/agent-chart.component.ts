import {Component, Input, OnInit} from '@angular/core';
import {ManagerService} from '../../service/manager.service';
import {ChartDataSets, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-agent-chart',
  templateUrl: './agent-chart.component.html',
  styleUrls: ['./agent-chart.component.css']
})
export class AgentChartComponent implements OnInit {
  public chartType: ChartType = 'line';
  public lineChartData: ChartDataSets[] = [{}];
  public lineChartLabels: Label[] = [];
  dataArray: number[];
  labelArray: string[];
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  lineChartType = 'line';

  @Input() achievements: Map<string, number>;

  constructor(private service: ManagerService) {
  }

  ngOnInit(): void {
    this.lineChartData.push({data: Object.values(this.achievements).reverse()});
    this.lineChartLabels = Object.keys(this.achievements).reverse();
  }


}
