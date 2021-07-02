import {Component, Input, OnInit} from '@angular/core';
import {ObservationService} from '../../services/observation.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ReminderService} from '../../../reminder/services/reminder.service';

@Component({
  selector: 'app-create-observation',
  templateUrl: './create-observation.component.html',
  styleUrls: ['./create-observation.component.css']
})
export class CreateObservationComponent implements OnInit {
  @Input() clientId: number;
  public isCollapsed = false;
  receivedObservation = new FormGroup({
    date: new FormControl(''),
    message: new FormControl(''),
    reminderDate: new FormControl('')
  });

  constructor(private service: ObservationService, private reminderService: ReminderService) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.isCollapsed) {
      this.service.createWithClient(this.clientId.toString(), this.receivedObservation.value);
      this.reminderService.createReminder(this.clientId.toString(),
        this.receivedObservation.value.reminderDate, this.receivedObservation.value.message, true);
      console.log(this.clientId.toString(),
        this.receivedObservation.value.reminderDate, this.receivedObservation.value.message);
      alert('Log saved!');
      location.reload();
    } else {
      this.service.createWithClient(this.clientId.toString(), this.receivedObservation.value);
      alert('Log saved!');
      location.reload();
    }

  }

  public onClick(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
