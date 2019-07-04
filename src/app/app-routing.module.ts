import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'',redirectTo:'\login',pathMatch:'full'},
  {path:'login',component:LogInComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'loggedIn',component:LoggedInComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
