import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
export function userExistsValidator(
  userService: AuthService
): AsyncValidatorFn {
  return (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService
      .findUserByNameOrEmail(control.value)
      .pipe(
        map((user) => (user && user.length > 0) ? { userExists: true } : null))
      ;
  };
}
