import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hidePassword = true;
  hideRepeatPassword = true;
  myForm!: FormGroup;

  get fullName() {
    return this.myForm.get('fullName');
  }
  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get repeatPassword() {
    return this.myForm.get('repeatPassword');
  }

  ngOnInit(): void {
    this.createForm();
  }

  constructor(private fb: FormBuilder) {}

  createForm() {
    this.myForm = this.fb.group(
      {
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        repeatPassword: ['', [Validators.required]],
      },
      {
        updateOn: 'blur',
      }
    );
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
