import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-side-panel',
  imports: [
    RouterLink
  ],
  templateUrl: './side-panel.html',
  standalone: true,
  styleUrl: './side-panel.css'
})
export class SidePanel {

}
