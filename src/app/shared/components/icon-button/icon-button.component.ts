import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="icon-btn"
      [title]="title"
      (click)="clicked.emit($event)">
      <ng-container [ngSwitch]="icon">
        <svg *ngSwitchCase="'back'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </ng-container>
    </button>
  `,
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() icon: 'back' = 'back';
  @Input() title = '';
  @Output() clicked = new EventEmitter<Event>();
}
