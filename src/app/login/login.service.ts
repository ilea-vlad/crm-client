import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {
  }

  authenticationService(request: NgForm): any {
    return this.http.post('https://crm1-application.herokuapp.com/agent/authenticate',
      {username: request.value.username, password: request.value.password}, {responseType: 'text' as 'json'});
  }

  managerAuthenticationService(request: NgForm): any {
    return this.http.post('https://crm1-application.herokuapp.com/manager/authenticate',
      {username: request.value.username, password: request.value.password}, {responseType: 'text' as 'json'});
  }

  loggedId(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.clear();
    this.router.navigate(['/login']);
  }



}
