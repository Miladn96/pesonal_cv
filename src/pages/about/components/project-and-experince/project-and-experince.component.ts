import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'project-and-experince',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-and-experince.component.html',
  styleUrls: ['./project-and-experince.component.scss']
})
export class ProjectAndExperinceComponent {
  @Input() projects?: number;
  @Input() years?: number;
}
