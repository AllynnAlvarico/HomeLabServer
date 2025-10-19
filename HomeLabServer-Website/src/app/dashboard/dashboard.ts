import { Component } from '@angular/core';
import { SidePanel } from './side-panel/side-panel';
import { BentoGrid } from './bento-grid/bento-grid';

@Component({
  selector: 'app-dashboard',
  imports: [
    SidePanel,
    BentoGrid
  ],
  templateUrl: './dashboard.html',
  standalone: true,
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
