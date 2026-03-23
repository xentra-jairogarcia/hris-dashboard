import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [ngClass]="['action-btn', 'action-btn--' + variant, 'action-btn--' + size]"
      [type]="type"
      [disabled]="disabled"
      (click)="clicked.emit($event)">
      <ng-container [ngSwitch]="icon">
        <svg *ngSwitchCase="'plus'" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="white"/>
        </svg>
        <svg *ngSwitchCase="'star'" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1l2 4 4.5.7-3.3 3.1.8 4.5L8 11.2 3.9 13.3l.8-4.5L1.5 5.7 6 5z"/>
        </svg>
        <svg *ngSwitchCase="'save'" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12.5 14H3.5a1 1 0 01-1-1V3a1 1 0 011-1h7l3 3v8a1 1 0 01-1 1z"/>
          <path d="M11.5 14V9.5h-7V14"/>
          <path d="M4.5 2v3h5"/>
        </svg>
        <svg *ngSwitchCase="'profile'" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="8" cy="5" r="3" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <path d="M2.5 14.5C3 11.5 5.2 9.5 8 9.5s5 2 5.5 5" fill="none" stroke="currentColor" stroke-width="1.4"/>
        </svg>
      </ng-container>
      {{ label }}
    </button>
  `,
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() label = 'Button';
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'blue' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() icon?: 'plus' | 'star' | 'save' | 'profile';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<Event>();
}
