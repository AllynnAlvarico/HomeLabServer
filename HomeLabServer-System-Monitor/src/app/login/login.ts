import { Component } from '@angular/core';
import { LoginForm } from './login-form/login-form';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    LoginForm,
    NgOptimizedImage
  ],
  templateUrl: './login.html',
  standalone: true,
  styleUrl: './login.css'
})
export class Login {

}
