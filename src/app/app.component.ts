import {Component} from '@angular/core';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer-relationship-manager-angular';
  active = 'top';
  user: any;

  constructor(public service: LoginService) {
  }

}
