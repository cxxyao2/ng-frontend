import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const authRoutes: Routes = [
  { path: 'change-password', component: ChangepasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
