import { Directive } from '@angular/core';

@Directive({
  selector: '[appCreatePasswordStrength]',
})
export class CreatePasswordStrengthDirective {
  // for templated form
  // ^(?=(?:.*[0-9]){1,})(?=(?:.*[!@#$%^&*]){1,})(?=(?:.*[a-z]){1,})(?=(?:.*[A-Z]){1,}).{8,}$

  constructor() {}
}
