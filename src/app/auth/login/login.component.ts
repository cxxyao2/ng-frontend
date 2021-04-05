import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName = '';
  userEmail = '';
  userPassword = '';

  constructor() {}

  ngOnInit(): void {}

  // entre
  // name,email:unique, asynchronize validateor
  // password, repeat-password validator

  onEnterName(value: string) {
    this.userName = value;
  }

  onEnterEmail(value: string) {
    this.userEmail = value;
  }

  submit() {}
}
