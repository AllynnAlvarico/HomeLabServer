import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap, timer} from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface Metrics {
  cpuLoadPercent: number;
  totalMemoryMb: number;
  usedMemoryMb: number;
  cpuCores: number;
  currentCpuFrequencyGhz: number;
  maxCpuFrequencyGhz: number;
  cpuTemperatureC: number;
  uptimeMs: number;
  hostname: string;
}

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  constructor(private http: HttpClient) {}

  pollMetrics(apiUrl:string, intervalMs: number = 1000): Observable<Metrics> {
    // Emits values every intervalMs, requests latest on each tick
    return timer(0, intervalMs).pipe(
      switchMap(() => this.http.get<Metrics>(apiUrl)),
      // tap(data => console.log('polled metrics:', data))
    );
  }
}
