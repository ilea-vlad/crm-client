import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../client/services/client.service';
import {ClientType} from '../../../../Types/ClientType';
import {AgentService} from '../../services/agent.service';
import {AgentType} from '../../../../Types/AgentType';
import {Router} from '@angular/router';
import {LoginService} from '../../../../login/login.service';
import {NgForm} from '@angular/forms';
import {ChartDataSets, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-main-agent-page',
  templateUrl: './main-agent-page.component.html',
  styleUrls: ['./main-agent-page.component.css']
})
export class MainAgentPageComponent implements OnInit {
  active = 'top';
  uncheckedAgents: AgentType[];
  achievements: Map<string, number>;
  agentList: AgentType[];

  componentVisibility;


  constructor(private agentService: AgentService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.agentService.getUnchecked(localStorage.getItem('username')).subscribe(list => this.uncheckedAgents = list);
    this.agentService.getAllAgents(localStorage.getItem('username')).subscribe(l => this.agentList = l);

  }

  gavePermission(agent: AgentType): void {
    this.agentService.gavePermission(agent.username, 'true');
  }

  delete(agent: AgentType): void {
    this.agentService.deleteAgent(agent.id);
  }

  logout(): void {
    this.loginService.logout();
  }

  getData(data: NgForm): void {
    this.componentVisibility = false;
    this.agentService.getAchievements(data.value.agent, data.value.sinceDate, data.value.untilDate).subscribe(l => {
      this.achievements = l;
      this.componentVisibility = true;
    });
  }
}
