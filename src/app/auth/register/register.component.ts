import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UniqueUserValidator } from '../../share/unique-user.directive';
import { identifyPasswordValidator } from '../../share/identify-password.directive';
import { forbiddenNameValidator } from '../../share/forbidden-name.directive';

import { AuthService } from '../../service/auth.service';
import { User } from '../../User';
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

  constructor(
    private authService: AuthService,
    private uniqueValidator: UniqueUserValidator
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        fullName: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(5),
            forbiddenNameValidator(/bob/i),
          ],
          asyncValidators: [
            this.uniqueValidator.validate.bind(this.uniqueValidator),
          ],
          updateOn: 'blur',
        }),
        email: new FormControl('', {
          validators: [Validators.required, Validators.email],
          asyncValidators: [
            this.uniqueValidator.validate.bind(this.uniqueValidator),
          ],
          updateOn: 'blur',
        }),
        password: new FormControl('', {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
        repeatPassword: new FormControl('', {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
      },
      { validators: identifyPasswordValidator, updateOn: 'submit' }
    ); // <-- add custom validator at the FormGroup level
  }

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
  getNameErrorMessage() {
    console.log('name error', this.fullName?.errors);
    return 'error name';
  }

  getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordMessage() {
    console.log('password error', this.password?.errors);
    return 'error password';
  }

  getRepeatPasswordMessage() {
    console.log('repeatPassword error', this.repeatPassword?.errors);
    return 'error repeatPassword';
  }
  onSubmit() {
    console.log('for error', this.myForm?.errors);
    if (this.myForm.invalid) return;
    console.log(this.myForm.value);
    this.authService
      .registerUser({
        name: this.fullName?.value,
        email: this.email?.value,
        password: this.password?.value,
      })
      .subscribe(
        (data) => {
          // homepage or other
        },
        (error) => {
          // show error
        },
        () => {
          console.log('register a user');
        }
      );
  }
}
