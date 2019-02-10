import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { LoginLogoutComponent } from './components/login-logout/login-logout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoginLogoutComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
})
export class SharedModule { }
