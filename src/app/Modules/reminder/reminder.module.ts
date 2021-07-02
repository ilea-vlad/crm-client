import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReminderRoutingModule} from './reminder-routing.module';
import {GetRemindersComponent} from './components/get-reminders/get-reminders.component';
import {CreateReminderComponent} from './components/create-reminder/create-reminder.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { ExposeRemindersComponent } from './components/expose-reminders/expose-reminders.component';


@NgModule({
  declarations: [GetRemindersComponent, CreateReminderComponent, ExposeRemindersComponent],
  imports: [
    CommonModule,
    ReminderRoutingModule,
    FormsModule,
    NgbCollapseModule,
    ReactiveFormsModule
  ],
  exports: [
    GetRemindersComponent
  ]
})
export class ReminderModule {
}
