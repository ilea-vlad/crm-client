import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {GetClientsComponent} from './component/get-clients/get-clients.component';
import {CreateClientComponent} from './component/create-client/create-client.component';
import {UpdateClientsComponent} from './component/update-clients/update-clients.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReminderModule} from '../reminder/reminder.module';
import {ObservationModule} from '../observation/observation.module';
import {TokenInterceptorService} from '../../Services/token-interceptor.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [GetClientsComponent, CreateClientComponent, UpdateClientsComponent],
    imports: [
        CommonModule,
        ClientRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        ReminderModule,
        ObservationModule,
        NgbModule,
        MatTableModule,
        MatBadgeModule
    ],
  exports: [
    GetClientsComponent
  ], providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }]
})
export class ClientModule {
}
