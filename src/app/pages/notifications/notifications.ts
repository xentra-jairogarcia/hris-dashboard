import { Component } from '@angular/core';
import { TextLinkButtonComponent } from '../../shared/components/text-link-button/text-link-button.component';

@Component({
  selector: 'app-notifications',
  imports: [TextLinkButtonComponent],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
})
export class Notifications {}
