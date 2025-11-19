import { Component, signal } from '@angular/core';
import {Metrics} from './metrics/metrics';
import {BarGauge} from './bar-gauge/bar-gauge';

@Component({
  selector: 'app-root',
  imports: [
    Metrics,
    BarGauge
  ],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SysGaugeApp');
}
