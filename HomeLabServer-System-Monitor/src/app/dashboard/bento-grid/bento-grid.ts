import { Component } from '@angular/core';
import {ServerGauge} from './server-gauge/server-gauge';

@Component({
  selector: 'app-bento-grid',
  imports: [
    ServerGauge
  ],
  templateUrl: './bento-grid.html',
  standalone: true,
  styleUrl: './bento-grid.css'
})
export class BentoGrid {

}
