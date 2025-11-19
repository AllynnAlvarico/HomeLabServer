import { Component } from '@angular/core';
import { ServerBox } from './server-box/server-box';

@Component({
  selector: 'app-info',
  imports: [
    ServerBox
  ],
  templateUrl: './info.html',
  standalone: true,
  styleUrl: './info.css'
})
export class Info {

}
