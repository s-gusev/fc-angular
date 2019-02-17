import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../shared/services/auth.service';
import { NewsService } from '../../news/services/news.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fc-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  errorMsg?: string;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private readonly authService: AuthService,
    private readonly cdr: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  formSubmit() {
    this.errorMsg = undefined;
    this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
      .subscribe(
        (result) => {
          this.router.navigateByUrl('/');
        },
        (error) => {
          this.errorMsg = error.error.message;
          this.cdr.markForCheck();
        }
      );
  }
}
