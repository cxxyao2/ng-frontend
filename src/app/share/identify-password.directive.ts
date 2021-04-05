import { Directive } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

/** Password should be equal to repeat-password */
export const identifyPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const repeatPassword = control.get('repeatPassword');

  return password && repeatPassword && password.value !== repeatPassword.value
    ? {
        identifyPassword: true,
      }
    : null;
};

@Directive({
  selector: '[appIdentifyPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IdentifyPasswordDirective,
      multi: true,
    },
  ],
})
export class IdentifyPasswordDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return identifyPasswordValidator(control);
  }
}
