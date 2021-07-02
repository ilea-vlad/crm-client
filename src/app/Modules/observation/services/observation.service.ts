import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ObservationType} from '../../../Types/ObservationType';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  constructor(private http: HttpClient) {
  }

  public getObservations(clientId: string): Observable<ObservationType[]> {
    return this.http.get<ObservationType[]>('https://crm1-application.herokuapp.com/observation/client/' + clientId);
  }

  public createWithClient(clientId: string, observation: ObservationType): void {
    this.http.post('https://crm1-application.herokuapp.com/observation/' + clientId, observation).subscribe();
  }
}
