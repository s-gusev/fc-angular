import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    UsersRoutingModule,
  ],
  declarations: [
    LoginPageComponent,
    SignupPageComponent,
  ],
  exports: [
  ],
})
export class UsersModule { }
