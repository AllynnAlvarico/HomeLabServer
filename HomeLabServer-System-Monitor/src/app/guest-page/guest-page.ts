import { Component } from '@angular/core';
import {Info} from './info/info';
import {Banner} from './banner/banner';

@Component({
  selector: 'app-guest-page',
  imports: [
    Info,
    Banner
  ],
  templateUrl: './guest-page.html',
  standalone: true,
  styleUrl: './guest-page.css'
})
export class GuestPage {

}
