import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ClientType} from '../../../../Types/ClientType';
import {ClientService} from '../../services/client.service';
import {NgForm} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UpdateClientsComponent} from '../update-clients/update-clients.component';
import {GetRemindersComponent} from '../../../reminder/components/get-reminders/get-reminders.component';
import {CreateReminderComponent} from '../../../reminder/components/create-reminder/create-reminder.component';
import {ReminderService} from '../../../reminder/services/reminder.service';
import {GetObservationsComponent} from '../../../observation/components/get-observations/get-observations.component';
import {LoginService} from '../../../../login/login.service';



@Component({
  selector: 'app-get-clients',
  templateUrl: './get-clients.component.html',
  styleUrls: ['./get-clients.component.css']
})
export class GetClientsComponent implements OnInit {
  list: ClientType[];
  todayReminderList = [];
  public isCollapsed = false;
  displayedColumns = ['name', 'cnp', 'phoneNumber', 'emailAddress', 'gdpr', 'function'];



  constructor(private service: ClientService,
              private modalService: NgbModal,
              private reminderService: ReminderService,
              private changeDetectorRef: ChangeDetectorRef,
              public loginService: LoginService) {
    this.setList();

  }


  ngOnInit(): void {
    this.getReminderNumber();
  }


  public find(searchResult: NgForm): void {
    if (searchResult.value.searchName === '' && searchResult.value.searchCnp === '' && searchResult.value.searchNumber === '') {
      this.setList();
    } else {
      this.service.find(localStorage.getItem('username'), searchResult.value.searchName,
        searchResult.value.searchCnp, searchResult.value.searchNumber).subscribe(l => {
        this.list = l;
      });
    }
  }


  editItem(clientType: ClientType): void {
    const ref = this.modalService.open(UpdateClientsComponent, {centered: true});
    ref.componentInstance.selectedClient = clientType;

    ref.result.then((yes) => {
      this.changeDetectorRef.detectChanges();
    });
  }

  private setList(): void {
    this.service.getClients(localStorage.getItem('username')).subscribe(l => this.list = l);
    this.getReminderNumber();
  }

  getReminders(): void {
    const ref = this.modalService.open(GetRemindersComponent, {centered: true, size: 'xl'});
  }

  createReminder(clientId: number): void {
    const ref = this.modalService.open(CreateReminderComponent, {centered: true, size: 'sm'});
    ref.componentInstance.clientId = clientId;

  }

  getReminderNumber(): void {
    this.reminderService.getTodayReminders().subscribe(reminderList => this.todayReminderList = reminderList);
  }

  openLog(clientId: number): void {
    const ref = this.modalService.open(GetObservationsComponent, {centered: true});
    ref.componentInstance.clientId = clientId;
  }


}
