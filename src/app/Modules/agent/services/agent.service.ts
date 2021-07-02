import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AgentType} from '../../../Types/AgentType';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient, private router: Router) {
  }

  getUnchecked(managerUsername: string): Observable<AgentType[]> {
    const params = new HttpParams().set('manager', managerUsername);
    return this.http.get<AgentType[]>('https://crm1-application.herokuapp.com/agent', {params});
  }

  gavePermission(username: string, permission: string): void {
    const params = new HttpParams().set('username', username).set('permission', permission);
    this.http.get('https://crm1-application.herokuapp.com/agent', {params}).subscribe();
  }

  deleteAgent(id: number): void {
    this.http.delete('https://crm1-application.herokuapp.com/agent/' + id).subscribe();
  }

  getAchievements(agentId: number, sinceDate: Date, untilDate: Date): Observable<Map<string, number>> {
    const params = new HttpParams().set('agentId', agentId.toString())
      .set('sinceDate', sinceDate.toString()).set('untilDate', untilDate.toString());
    return this.http.get<Map<string, number>>('https://crm1-application.herokuapp.com/client/agentAchievement', {params});
  }

  getAllAgents(manager: string): Observable<AgentType[]> {
    const params = new HttpParams().set('manager', manager);
    return this.http.get<AgentType[]>('https://crm1-application.herokuapp.com/agent/getAll', {params});
  }
}
