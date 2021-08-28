import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ManagerType} from '../Types/ManagerType';
import {NgForm} from '@angular/forms';
import {CurrencyType} from '../Types/CurrencyType';

@Injectable({
  providedIn: 'root'
})
export class IgnoredInteceptorService {
  private httpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  public getEuroPrice(): Observable<CurrencyType> {
    return this.httpClient.get<CurrencyType>('https://api.exchangerate.host/latest?symbols=RON');
  }

  getManagers(): Observable<ManagerType[]> {
    return this.httpClient.get<ManagerType[]>('https://crm1-application.herokuapp.com/manager/getAll');
  }

  register(newAgent: NgForm): void {
    const params = new HttpParams().set('manager', newAgent.value.manager);
    console.log(newAgent.value.emailAddress);
    this.httpClient.post('https://crm1-application.herokuapp.com/agent/register',
      {
        username: newAgent.value.username,
        password: newAgent.value.password,
        email: newAgent.value.emailAddress
      }, {params}).subscribe();
  }

  userExist(username: string): Observable<boolean> {
    const params = new HttpParams().set('username', username);
    return this.httpClient.get<boolean>('https://crm1-application.herokuapp.com/agent/check', {params});
  }

  populate(): void {
    this.httpClient.post('https://crm1-application.herokuapp.com/manager', {
      username: 'manager',
      password: 'manager',
      role: 'ROLE_MANAGER'
    }).subscribe();
  }

}
