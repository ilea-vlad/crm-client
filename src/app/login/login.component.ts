import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {JWTTokenServiceService} from '../Services/jwttoken-service.service';
import {Router} from '@angular/router';
import {NgForm, NgModel} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RegisterComponent} from './register/register.component';
import {ManagerType} from '../Types/ManagerType';
import {IgnoredInteceptorService} from '../Services/ignored-inteceptor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService, private jwt: JWTTokenServiceService,
              private router: Router, private modalService: NgbModal,
              private noTokenService: IgnoredInteceptorService) {
  }

  ngOnInit(): void {
    localStorage.clear();
  }


  login(auth: NgForm): void {
    localStorage.setItem('username', auth.value.username);
    localStorage.setItem('password', auth.value.password);
    if (auth.value.permission === 'agent') {
      this.service.authenticationService(auth).subscribe(data => {
        localStorage.setItem('token', data);
        this.router.navigate(['/client']);
      });
    } else {
      this.service.managerAuthenticationService(auth).subscribe(data => {
        localStorage.setItem('token', data);
        this.router.navigate(['/agent']);
      });
    }

  }

  register(): void {
    const ref = this.modalService.open(RegisterComponent, {centered: true});
  }

  populate(): void {
    this.noTokenService.populate();
  }
}
