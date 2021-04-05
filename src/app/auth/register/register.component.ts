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
  // 1 uppercase ,1 lowercase, 1 number, 1 special sign
  // /^(?=(?:.*[0-9]){1,})(?=(?:.*[!@#$%^&*]){1,})(?=(?:.*[a-z]){1,})(?=(?:.*[A-Z]){1,}).{8,}$/g
  passwordPattern = '[A-Za-z]{3}';
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
        fullName: ['', [Validators.required, Validators.minLength(4)]],
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
    if (this.email?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
