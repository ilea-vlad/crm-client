import {Component, Input, OnInit} from '@angular/core';
import {ReminderType} from '../../../../Types/ReminderType';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ReminderService} from '../../services/reminder.service';

@Component({
  selector: 'app-expose-reminders',
  templateUrl: './expose-reminders.component.html',
  styleUrls: ['./expose-reminders.component.css']
})
export class ExposeRemindersComponent implements OnInit {
  @Input() list: ReminderType[];
  editForm: FormGroup;
  isCollapsed = true;
  receivedReminder: ReminderType;

  constructor(private service: ReminderService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.service.updateReminder(this.editForm.value, this.receivedReminder.client.id.toString());
    alert('Reminder updated!');
  }

  setReminderStatus(reminder: ReminderType): void {
    reminder.status = false;
    this.service.updateReminder(reminder, reminder.client.id.toString());
    alert('Reminder status changed!');
  }

  onClick(reminder: ReminderType): void {
    this.isCollapsed = !this.isCollapsed;
    this.receivedReminder = reminder;
    this.populateForm();
  }

  private populateForm(): void {
    this.editForm = this.formBuilder.group({
      id: [this.receivedReminder.id],
      date: [this.receivedReminder.date],
      message: [this.receivedReminder.message],
      status: [this.receivedReminder.status]
    });
  }

}
