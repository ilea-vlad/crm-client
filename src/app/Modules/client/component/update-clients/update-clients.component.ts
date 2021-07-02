import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {ClientType} from '../../../../Types/ClientType';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-clients',

  templateUrl: './update-clients.component.html',
  styleUrls: ['./update-clients.component.css']
})
export class UpdateClientsComponent implements OnInit {
  id: string;
  selectedClient: ClientType;
  editForm: FormGroup;

  constructor(private service: ClientService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              public modal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.populateForm();
  }


  public onSubmit(): void {
    this.service.updateClient(localStorage.getItem('username'), this.editForm.value);
    this.modal.close();
  }

  private populateForm(): void {
    this.editForm = this.formBuilder.group({
      id: [this.selectedClient.id],
      name: [this.selectedClient.name],
      cnp: [this.selectedClient.cnp],
      phoneNumber: [this.selectedClient.phoneNumber],
      emailAddress: [this.selectedClient.emailAddress],
      gdprStatus: [this.selectedClient.gdprStatus],
      leadStatus: [this.selectedClient.leadStatus]
    });
  }
}
