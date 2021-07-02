import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClientType} from '../../../Types/ClientType';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  public getClients(username: string): Observable<ClientType[]> {
    const params = new HttpParams().set('username', username);
    return this.http.get<ClientType[]>('https://crm1-application.herokuapp.com/client', {params});
  }

  public getById(id: string): Observable<ClientType> {

    return this.http.get<ClientType>('https://crm1-application.herokuapp.com/client/' + id);
  }

  public createClient(username: string, name: string, cnp: string,
                      phoneNumber: string, emailAddress: string, gdprStatus: boolean, leadStatus: boolean): void {
    console.log(name);
    const params = new HttpParams().set('username', username);
    this.http.post('https://crm1-application.herokuapp.com/client', {
      name,
      cnp,
      phoneNumber,
      emailAddress,
      gdprStatus,
      leadStatus
    }, {params}).subscribe();
  }

  public updateClient(username: string, client: ClientType): void {
    const params = new HttpParams().set('username', username);
    this.http.put('https://crm1-application.herokuapp.com/client', client, {params}).subscribe();
  }


  public find(username: string, name: string, cnp: string, searchNumber: string): Observable<ClientType[]> {
    const params = new HttpParams().set('username', username).set('name', name).set('cnp', cnp).set('number', searchNumber);
    return this.http.get<ClientType[]>('https://crm1-application.herokuapp.com/client', {params});
  }

  public checkCnp(cnp: string): Observable<boolean> {
    const params = new HttpParams().set('cnp', cnp);
    return this.http.get<boolean>('https://crm1-application.herokuapp.com/client/checkCnp', {params});
  }
}
