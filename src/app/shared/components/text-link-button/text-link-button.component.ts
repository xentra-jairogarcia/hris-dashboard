import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-link-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="text-link-btn"
      (click)="clicked.emit($event)">
      {{ label }}
    </button>
  `,
  styleUrls: ['./text-link-button.component.scss']
})
export class TextLinkButtonComponent {
  @Input() label = 'Mark all as read';
  @Output() clicked = new EventEmitter<Event>();
}
