import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-portainers',
  imports: [],
  templateUrl: './portainers.html',
  standalone: true,
  styleUrl: './portainers.css'
})
export class Portainers {
  @Input() apiUrl: string = '/portainer/delta';
}
