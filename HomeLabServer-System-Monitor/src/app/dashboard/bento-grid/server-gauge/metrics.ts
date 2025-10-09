import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap, timer} from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface Metrics {
  cpuLoadPercent: number;
  totalMemoryMb: number;
  usedMemoryMb: number;
  cpuTemperatureC: number;
  uptimeMs: number;
  hostname: string;
}

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  constructor(private http: HttpClient) {}

  pollMetrics(intervalMs: number = 800): Observable<Metrics> {
    // Emits values every intervalMs, requests latest on each tick
    return timer(0, intervalMs).pipe(
      switchMap(() => this.http.get<Metrics>('/sys/api/metrics')),
      // tap(data => console.log('polled metrics:', data))
    );
  }
}
