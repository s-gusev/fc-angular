import { OnInit, ChangeDetectorRef, OnDestroy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({})
export abstract class LoginStateDependentComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;
  userName: string;
  subscription: Subscription;

  constructor(
    public readonly authService: AuthService,
    public readonly router: Router,
    public readonly cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userName = this.authService.getUserName();

    this.subscription = this.authService.loginStateChanged.subscribe(
      () => {
        this.isLoggedIn = this.authService.isLoggedIn();
        this.userName = this.authService.getUserName();
        this.cdr.markForCheck();
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
