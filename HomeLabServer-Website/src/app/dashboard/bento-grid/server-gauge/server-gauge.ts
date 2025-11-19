import {Component, ChangeDetectorRef, Input, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { MetricsService, Metrics } from './metrics';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-gauge',
  imports: [ CommonModule ],
  templateUrl: './server-gauge.html',
  standalone: true,
  styleUrl: './server-gauge.css'
})
export class ServerGauge implements OnInit, OnDestroy {
  @Input() apiUrl: string = '/sys/api/metrics';
  metrics: Metrics = {
    cpuLoadPercent: 0,
    totalMemoryMb: 0,
    usedMemoryMb: 0,
    cpuCores: 0,
    currentCpuFrequencyGhz: 0,
    maxCpuFrequencyGhz: 0,
    cpuTemperatureC: 0,
    uptimeMs: 0,
    hostname: "Unknown"
  };
    private sub?: Subscription;

    constructor(private metricsService: MetricsService, private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
      // console.log('[ServerGauge] ngOnInit called');
      this.sub = this.metricsService.pollMetrics(this.apiUrl, 1100).subscribe(data => {
        Object.assign(this.metrics, data)
        this.cd.markForCheck();
        // console.log("hello");
      });
    }

    ngOnDestroy() {
      // console.log('[ServerGauge] ngOnDestroy called');
      this.sub?.unsubscribe();
    }

    formatDuration(ms:number) {
      const totalSeconds = Math.floor(ms / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      return `${days} d : ${hours}h : ${minutes} m : ${seconds}`;
    }

    /**
     * Compute SVG arc path for the gauge based on a percentage (0-100)
     */
    // Arc for NEUTRAL-ORANGE fill up to the current percent
    getArcPath(percent: number): string {
      percent = Math.max(0, Math.min(100, percent));
      const start = this.polarToCartesian(160, 160, 100, -180);
      const end = this.polarToCartesian(160, 160, 100, -180 + percent * 180 / 100);
      const largeArcFlag = 0;
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
