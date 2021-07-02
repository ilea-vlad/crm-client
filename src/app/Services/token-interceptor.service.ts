import {Injectable, Injector} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {LoginService} from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(req, next): any {
    if (this.injector.get(LoginService).loggedId()) {
      const tokenizedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.injector.get(LoginService).getToken()}`,
          username: localStorage.getItem('username')
        }
      });
      return next.handle(tokenizedRequest);
    } else {
      const tokenizedRequest = req.clone({
        setHeaders: {
          authorization: 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
        }

      });
      return next.handle(tokenizedRequest);
    }
  }
}
