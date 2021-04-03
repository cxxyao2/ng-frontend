import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName = '';
  userEmail = '';
  userPassword = '';
  userRepeatPassword = '';

  constructor() {}

  ngOnInit(): void {}

  // entr
  // name,email:unique, asynchronize validateor
  // password, repeat-password validator

  onEnterName(value: string) {
    this.userName = value;
  }

  onEnterEmail(value: string) {
    this.userEmail = value;
  }
}
