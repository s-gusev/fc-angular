import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fc-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formSubmit() {
    console.log('form submit');
  }
}
