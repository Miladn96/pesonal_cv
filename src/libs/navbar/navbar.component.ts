import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@@personalCV/libs/button/button.component';
import { ButtonTypeEnum } from '@@personalCV/models/enums/button_type_enum';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'navbar-component',
  standalone: true,
  imports: [MatButtonModule, ButtonComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  ButtonTypeEnum = ButtonTypeEnum;

  constructor(public readonly router: Router) {}

  onNavigate(path: string) {
    console.log(this.router.url.includes('about'));
    this.router.navigateByUrl(path);
  }
}
