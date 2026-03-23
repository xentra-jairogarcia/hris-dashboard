import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="toggle-btn"
      [class.active]="active"
      [title]="title"
      (click)="toggled.emit()">
      <ng-container [ngSwitch]="icon">
        <svg *ngSwitchCase="'list'" width="18" height="17" viewBox="0 0 18 17" fill="currentColor">
          <path d="M5 0.5H18V2.5H5V0.5ZM0 0H3V3H0V0ZM0 7H3V10H0V7ZM0 14H3V17H0V14ZM5 7.5H18V9.5H5V7.5ZM5 14.5H18V16.5H5V14.5Z"/>
        </svg>
        <svg *ngSwitchCase="'card'" width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
          <path d="M0 1C0 0.44772 0.44772 0 1 0H7C7.5523 0 8 0.44772 8 1V7C8 7.5523 7.5523 8 7 8H1C0.44772 8 0 7.5523 0 7V1ZM0 11C0 10.4477 0.44772 10 1 10H7C7.5523 10 8 10.4477 8 11V17C8 17.5523 7.5523 18 7 18H1C0.44772 18 0 17.5523 0 17V11ZM10 1C10 0.44772 10.4477 0 11 0H17C17.5523 0 18 0.44772 18 1V7C18 7.5523 17.5523 8 17 8H11C10.4477 8 10 7.5523 10 7V1ZM10 11C10 10.4477 10.4477 10 11 10H17C17.5523 10 18 10.4477 18 11V17C18 17.5523 17.5523 18 17 18H11C10.4477 18 10 17.5523 10 17V11ZM12 2V6H16V2H12ZM12 12V16H16V12H12ZM2 2V6H6V2H2ZM2 12V16H6V12H2Z"/>
        </svg>
      </ng-container>
    </button>
  `,
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent {
  @Input() icon: 'list' | 'card' = 'list';
  @Input() active = false;
  @Input() title = '';
  @Output() toggled = new EventEmitter<void>();
}
