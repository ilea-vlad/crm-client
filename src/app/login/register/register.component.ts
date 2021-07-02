import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ManagerType} from '../../Types/ManagerType';
import {NgForm} from '@angular/forms';
import {IgnoredInteceptorService} from '../../Services/ignored-inteceptor.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  managerList: ManagerType[];
  userExist: boolean;
  username: string;

  constructor(public modal: NgbActiveModal, private ignoreInterceptor: IgnoredInteceptorService) {
    this.ignoreInterceptor.getManagers().subscribe(managers => this.managerList = managers);
  }

  ngOnInit(): void {
    this.userExist = false;
  }

  onSubmit(newAgent: NgForm): void {
    this.ignoreInterceptor.userExist(newAgent.value.username).subscribe(data => {
      this.userExist = data;
      if (!this.userExist) {
        this.ignoreInterceptor.register(newAgent);
        console.log(newAgent.value.emailAddress);
      } else {
        this.username = '';
      }
    });
  }
}
