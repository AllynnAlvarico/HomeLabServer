import { Component, signal } from '@angular/core';
import {Metrics} from './metrics/metrics';

@Component({
  selector: 'app-root',
  imports: [
    Metrics
  ],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SysGaugeApp');
}
