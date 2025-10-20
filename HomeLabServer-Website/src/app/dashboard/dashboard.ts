import { Component } from '@angular/core';
import { SidePanel } from './side-panel/side-panel';
import { BentoGrid } from './bento-grid/bento-grid';
import {Portainers} from './portainers/portainers';

@Component({
  selector: 'app-dashboard',
  imports: [
    SidePanel,
    BentoGrid,
    Portainers
  ],
  templateUrl: './dashboard.html',
  standalone: true,
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
