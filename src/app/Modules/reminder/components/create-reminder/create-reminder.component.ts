import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {ReminderService} from '../../services/reminder.service';

@Component({
  selector: 'app-create-reminder',
  templateUrl: './create-reminder.component.html',
  styleUrls: ['./create-reminder.component.css']
})
export class CreateReminderComponent implements OnInit {
  clientId: number;


  constructor(private service: ReminderService, public modal: NgbActiveModal) {
  }


  ngOnInit(): void {
  }

  public onSubmit(reminderForm: NgForm): void {
    this.service.createReminder(this.clientId.toString(), reminderForm.value.date, reminderForm.value.message, true);
    this.modal.close();
  }

}
