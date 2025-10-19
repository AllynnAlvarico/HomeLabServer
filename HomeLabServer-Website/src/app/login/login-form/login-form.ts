import { Component } from '@angular/core';
import {Span1} from './span-1/span-1';
import {Span2} from './span-2/span-2';
import {Span3} from './span-3/span-3';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [
    Span1,
    Span2,
    Span3,
    RouterLink
  ],
  templateUrl: './login-form.html',
  standalone: true,
  styleUrl: './login-form.css'
})
export class LoginForm {

}
