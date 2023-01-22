import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HttpClientModule} from '@angular/common/http';
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { AuthentificationComponent } from './authentification.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthentificationComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  exports:[
  LoginComponent,
  RegisterComponent
  ]
})
export class AuthentificationModule { }
