import { isPlatformBrowser } from '@angular/common';
import {Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, Inject} from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.html',
  standalone: true,
  styleUrls: ['./matrix.css']
})
export class MatrixComponent implements AfterViewInit {

  @ViewChild('matrixCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  matrixChars: string[] = "zpulsehomelabserver".split("");
  // matrixChars: string[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("");
  fontSize: number = 10;
  columns!: number;
  drops!: number[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // console.log(platformId.toString());
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = this.canvasRef.nativeElement;
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      this.columns = Math.floor(canvas.width / this.fontSize);
      this.drops = Array(this.columns).fill(1);
      setInterval(() => this.draw(), 35);
    }
  }

  draw(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.ctx.fillStyle = "#00FF00";
    this.ctx.font = `${this.fontSize}px arial`;
    for (let i = 0; i < this.drops.length; i++) {
      const text: string = this.matrixChars[Math.floor(Math.random() * this.matrixChars.length)];
      this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);

      if (this.drops[i] * this.fontSize > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  }
}
