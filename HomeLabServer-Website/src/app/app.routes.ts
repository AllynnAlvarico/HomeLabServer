import { Routes } from '@angular/router';
import { Login } from './login/login';
import { GuestPage } from './guest-page/guest-page';
import { LoginAdmin } from './login/login-admin/login-admin';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {path: '', component: Login},
  {path: 'home', component: Login},
  {path: 'guest', component: GuestPage},
  {path: 'admin', component: LoginAdmin},
  {path: 'dashboard', component: Dashboard},
];
