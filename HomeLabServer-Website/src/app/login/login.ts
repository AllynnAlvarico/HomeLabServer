import { Component } from '@angular/core';
import { LoginForm } from './login-form/login-form';
import { NgOptimizedImage } from '@angular/common';
import {MatrixComponent} from '../background/matrix/matrix';
import {LoginCollage} from './login-collage/login-collage';

@Component({
  selector: 'app-login',
  imports: [
    LoginForm,
    MatrixComponent,
    LoginCollage,
  ],
  templateUrl: './login.html',
  standalone: true,
  styleUrls: ['./login.css']
})
export class Login {

}
