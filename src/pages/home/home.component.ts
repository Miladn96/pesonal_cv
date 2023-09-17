import { ButtonComponent } from '@@personalCV/libs/button/button.component';
import { ButtonTypeEnum } from '@@personalCV/models/enums/button_type_enum';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  ButtonTypeEnum = ButtonTypeEnum;
}
