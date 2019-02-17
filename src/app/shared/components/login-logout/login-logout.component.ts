import { Component, OnInit, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fc-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginLogoutComponent implements OnInit {
  isLoggedIn: boolean;
  userName: string;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.authService.loginStateChanged.subscribe(
      () => {
        this.isLoggedIn = this.authService.isLoggedIn();
        this.userName = this.authService.getUserName();
        this.cdr.markForCheck();
      }
    )
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
