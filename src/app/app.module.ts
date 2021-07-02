import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ClientModule} from './Modules/client/client.module';
import {PolicyModule} from './Modules/policy/policy.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './login/login.component';
import {AgentModule} from './Modules/agent/agent.module';
import {AuthGuard} from './Services/auth.guard';
import {HTTP_INTERCEPTORS, HttpInterceptor} from '@angular/common/http';
import {TokenInterceptorService} from './Services/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './login/register/register.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { ChartsModule } from 'ng2-charts';

@Injectable()

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    PolicyModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AgentModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    ChartsModule
  ],
  providers: [AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule {

}
