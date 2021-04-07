import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  myForm!: FormGroup;
  invalidLoginMessage = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        fullName: new FormControl('', {
          validators: [Validators.required, Validators.minLength(5)],
          updateOn: 'blur',
        }),

        password: new FormControl('', {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
      },
      { updateOn: 'submit' }
    ); // <-- add custom validator at the FormGroup level
  }

  // entre
  // name,email:unique, asynchronize validateor
  // password, repeat-password validator

  get fullName() {
    return this.myForm.get('fullName');
  }

  get password() {
    return this.myForm.get('password');
  }

  onSubmit(): void {
    this.invalidLoginMessage = '';
    this.authService
      .login(this.fullName?.value, this.password?.value)
      .subscribe(
        (result) => {
          if (result) {
            this.authService.loginWithJwt(result);
            const returnUrl = this.route.snapshot.queryParamMap.get(
              'returnUrl'
            );
            this.router.navigate([returnUrl || '/']);
          } else {
            this.invalidLoginMessage = 'Invalid name/email or password';
          }
        },
        (error) => {
          this.invalidLoginMessage = JSON.stringify(error);
        }
      );
  }
}
