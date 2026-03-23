import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pill-tab-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="pill-tab"
      [class.active]="active"
      (click)="tabClick.emit()">
      {{ label }}
    </button>
  `,
  styleUrls: ['./pill-tab-button.component.scss']
})
export class PillTabButtonComponent {
  @Input() label = 'Tab';
  @Input() active = false;
  @Output() tabClick = new EventEmitter<void>();
}
