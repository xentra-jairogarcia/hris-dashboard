import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/atoms/button/button.component';

@Component({
  selector: 'app-notifications',
  imports: [ButtonComponent],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
})
export class Notifications {}
