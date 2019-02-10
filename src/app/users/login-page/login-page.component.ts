import { Component, OnInit } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'fc-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;

  constructor() { }

  ngOnInit() {
  }

  formSubmit() {
    console.log('form submit');
  }
}
