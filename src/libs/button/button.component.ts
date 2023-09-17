import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTypeEnum } from '@@personalCV/models/enums/button_type_enum';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'button-component',
  standalone: true,
  imports: [MatButtonModule, MatRippleModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonType: ButtonTypeEnum = ButtonTypeEnum.FILL;
  @Input() width: number = 154;
  @Input() height: number = 48;

  @Output() onTap?: Function;

  ButtonTypeEnum = ButtonTypeEnum;

  constructor() {}
}
