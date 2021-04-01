import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    ChangepasswordComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
