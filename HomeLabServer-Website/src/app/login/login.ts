import { Component } from '@angular/core';
import { LoginForm } from './login-form/login-form';
import { NgOptimizedImage } from '@angular/common';
import {MatrixComponent} from '../background/matrix/matrix';

@Component({
  selector: 'app-login',
  imports: [
    LoginForm,
    NgOptimizedImage,
    MatrixComponent
  ],
  templateUrl: './login.html',
  standalone: true,
  styleUrl: './login.css'
})
export class Login {

}
