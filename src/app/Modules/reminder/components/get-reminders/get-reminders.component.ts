import {Component, OnInit} from '@angular/core';
import {ReminderType} from '../../../../Types/ReminderType';
import {Observable} from 'rxjs';
import {ReminderService} from '../../services/reminder.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-get-reminders',
  templateUrl: './get-reminders.component.html',
  styleUrls: ['./get-reminders.component.css']
})
export class GetRemindersComponent implements OnInit {
  upcomingList: ReminderType[];
  todayList: ReminderType[];
  passedList: ReminderType[];
  editForm: FormGroup;
  isCollapsed = true;

  constructor(private service: ReminderService,
              public modal: NgbActiveModal,
  ) {
  }

  ngOnInit(): void {
    this.getUpcomingReminders();
    this.getTodayReminders();
    this.getPassedReminders();
  }


  public getUpcomingReminders(): void {
    this.service.getUpcomingReminders().subscribe(result => this.upcomingList = result);
  }

  public getTodayReminders(): void {
    this.service.getTodayReminders().subscribe(result => this.todayList = result);
  }

  public getPassedReminders(): void {
    this.service.getPassedReminders().subscribe(result => this.passedList = result);
  }


}
