import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ReminderType} from '../../../Types/ReminderType';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {


  constructor(private http: HttpClient) {
  }

  public getReminders(): Observable<ReminderType[]> {
    return this.http.get<ReminderType[]>('https://crm1-application.herokuapp.com/reminder');
  }

  public getUpcomingReminders(): Observable<ReminderType[]> {
    return this.http.get<ReminderType[]>('https://crm1-application.herokuapp.com/reminder/getUpcoming');
  }

  public getTodayReminders(): Observable<ReminderType[]> {
    return this.http.get<ReminderType[]>('https://crm1-application.herokuapp.com/reminder/getToday');
  }

  public getPassedReminders(): Observable<ReminderType[]> {
    return this.http.get<ReminderType[]>('https://crm1-application.herokuapp.com/reminder/getPassed');
  }

  public createReminder(clientId: string, date: Date, message: string, status: boolean): void {
    this.http.post('https://crm1-application.herokuapp.com/reminder/client/' + clientId, {date, message, status}).subscribe();
  }

  public updateReminder(reminder: ReminderType, clientId: string): void {
    this.http.put('https://crm1-application.herokuapp.com/reminder/client/' + clientId, reminder).subscribe();
  }
}
