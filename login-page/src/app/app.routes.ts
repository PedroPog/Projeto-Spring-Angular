import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './service/auth-guard.service';

export const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'signup',
    component:SignupPageComponent
  },
  {
    path:'user',
    component:UserComponent,
    canActivate:[AuthGuard]
  }
];
