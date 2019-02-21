import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoginStateDependentComponent } from '../login-state-depended-component';

@Component({
  selector: 'fc-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginLogoutComponent extends LoginStateDependentComponent {
  isLoggedIn: boolean;
  userName: string;

  logout() {
    this.authService.logout();
  }

}
