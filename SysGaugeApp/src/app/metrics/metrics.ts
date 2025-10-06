import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metrics',
  imports: [CommonModule],
  templateUrl: './metrics.html',
  standalone: true,
  styleUrls: ['./metrics.css']
})

export class Metrics implements OnInit, OnDestroy {
  metrics = {
    cpuLoad: 0,
    totalMemoryMb: 0,
    usedMemoryMb: 0,
    cpuTemperatureC: 0
  };

  private sub?: Subscription;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetch();
    this.sub = interval(800).subscribe(() => this.fetch());
  }

  fetch() {
    this.http.get<any>('/api/metrics').subscribe((data) => {
      this.metrics = data;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  /**
   * Compute SVG arc path for the gauge based on a percentage (0-100)
   */
  // Arc for NEUTRAL-ORANGE fill up to the current percent
  getArcPath(percent: number): string {
    // Start (-90deg), sweep (percent * 180/100) along semicircle
    const startAngle = -180;
    const endAngle = startAngle + (percent * 180 / 100);
    const start = this.polarToCartesian(160, 160, 100, startAngle);
    const end = this.polarToCartesian(160, 160, 100, endAngle);
    const largeArcFlag = percent > 50 ? 1 : 0;
    return `M${start.x},${start.y} A100,100 0 ${largeArcFlag} 1 ${end.x},${end.y}`;
  }

  /**
   * Return coordinates for a point on the gauge circle's arc
   */
  getNeedleEnd(percent: number): { x: number, y: number } {
    // Needle angle: -180deg (left) to +180deg (right)
    const angle = -180 + (percent * 180 / 100);
    return this.polarToCartesian(160, 160, 100, angle);
  }

// Convert polar coords to SVG x/y
  polarToCartesian(cx: number, cy: number, r: number, angle: number): { x: number, y: number } {
    const rad = Math.PI * angle / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad)
    };
  }
}
