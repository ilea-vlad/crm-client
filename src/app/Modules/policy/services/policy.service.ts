import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PolicyType} from '../../../Types/PolicyType';
import {ClientType} from '../../../Types/ClientType';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient) {
  }

  public getPolicyByClient(id: string): Observable<PolicyType[]> {
    return this.http.get<PolicyType[]>('https://crm1-application.herokuapp.com/policy/client/' + id);
  }

  public createPolicy(clientId: string,
                      types: string,
                      subtype: string,
                      policyNumber: string,
                      period: number,
                      startDate: Date,
                      endDate: Date,
                      fee: number): void {
    this.http.post('https://crm1-application.herokuapp.com/policy/create/' + clientId, {
      types,
      subtype,
      period,
      number: policyNumber,
      startDate,
      endDate,
      fee
    }).subscribe();
  }

  public updatePolicy(clientId: string, policy: PolicyType): void {
    this.http.put('https://crm1-application.herokuapp.com/policy/' + clientId, policy).subscribe();
  }

  public getAllPolicySubtype(): Observable<string[]> {
    return this.http.get<string[]>('https://crm1-application.herokuapp.com/policy/getSubtypes');
  }

}
