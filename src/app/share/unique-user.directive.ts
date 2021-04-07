import { Directive, forwardRef, Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUserValidator implements AsyncValidator {
  constructor(private userService: AuthService) {}

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userService.findUserByNameOrEmail(ctrl.value).pipe(
      map((user) => {
        return user ? { userExists: true } : null;
      }),
      catchError(() => of(null))
    );
  }
}

@Directive({
  selector: '[appUniqueUser]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueUserValidator),
      multi: true,
    },
  ],
})
export class UniqueUserDirective {
  constructor(private validator: UniqueUserValidator) {}
  Validate(control: AbstractControl) {
    this.validator.validate(control);
  }
}
