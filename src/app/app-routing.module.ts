import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GetClientsComponent} from './Modules/client/component/get-clients/get-clients.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
  path: '', component: LoginComponent
   } ,
  {
  path: 'login', component: LoginComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
