import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { UniqueUserValidator } from '../../share/unique-user.directive';
import { identifyPasswordValidator } from '../../share/identify-password.directive';
import { forbiddenNameValidator } from '../../share/forbidden-name.directive';

import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hidePassword = true;
  hideRepeatPassword = true;
  myForm!: FormGroup;
  panelOpenState = false;
  exceptionalError = '';
  // 1 uppercase ,1 lowercase, 1 number, 1 special sign
  // /^(?=(?:.*[0-9]){1,})(?=(?:.*[!@#$%^&*]){1,})(?=(?:.*[a-z]){1,})(?=(?:.*[A-Z]){1,}).{8,}$/g
  passwordPattern =
    '(?=(?:.*[0-9]){1,})(?=(?:.*[!@#$%^&*]){1,})(?=(?:.*[a-z]){1,})(?=(?:.*[A-Z]){1,}).{8,}';

  constructor(
    private router: Router,
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

  getNameMessage() {
    if (this.fullName?.errors?.required) {
      return 'Name is required';
    }
    if (this.fullName?.errors?.userExists) {
      return 'User Exists';
    }
    if (this.fullName?.errors?.minlength) {
      return 'Too short: ' + JSON.stringify(this.fullName?.errors?.minlength);
    }
    if (this.fullName?.errors?.forbiddenName) {
      return (
        'Name is forbidden: ' +
        JSON.stringify(this.fullName?.errors?.forbiddenName)
      );
    }
    return 'Name is invalid';
  }

  getEmailMessage() {
    console.log('eror', this.email?.errors);
    if (this.email?.errors?.required) {
      return 'Name is required';
    }

    if (this.email?.errors?.userExists) {
      return 'Email Exists';
    }
    if (this.email?.errors?.email) {
      return 'Not a valid email ';
    }
    return 'Email is invalid';
  }

  getPasswordMessage() {
    if (this.password?.errors?.required) {
      return 'Password is required';
    }

    if (this.password?.errors?.pattern) {
      return 'Password is invalid';
    }
    return 'Password is invalid';
  }

  getRepeatPasswordMessage() {
    if (this.repeatPassword?.errors?.required) {
      return 'RepeatPassword is required';
    }

    if (this.repeatPassword?.errors?.pattern) {
      return 'RepeatPassword is invalid';
    }
    return 'RepeatPassword is invalid';
  }

  onSubmit() {
    this.exceptionalError = '';
    if (this.myForm.invalid) {
      return;
    }
    console.log(this.myForm.value);
    this.authService
      .registerUser({
        name: this.fullName?.value,
        email: this.email?.value,
        password: this.password?.value,
      })
      .subscribe(
        (data) => {
          this.authService.loginWithJwt(data.token);
          this.router.navigate(['/']);
        },
        (error) => {
          // show error
          this.exceptionalError = JSON.stringify(error);
        },
        () => {
          //  console.log('register a user.');
        }
      );
  }
}
