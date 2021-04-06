import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
/** A user name cannot match the given regular express */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenNameDirective,
      multi: true,
    },
  ],
})
export class ForbiddenNameDirective implements Validator {
  // point: a validator function with argument

  @Input('appForBiddenName') forbiddenName?: string;
  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName
      ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
      : null;
  }
}
