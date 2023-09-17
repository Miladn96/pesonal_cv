import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderComponent } from '@@personalCV/libs/page-header/page-header.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { ProjectAndExperinceComponent } from './components/project-and-experince/project-and-experince.component'

const COMPONENTS = [
  PageHeaderComponent,
  PersonalInformationComponent,
  ProjectAndExperinceComponent,
]

@Component({
  standalone: true,
  imports: [...COMPONENTS, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {}
