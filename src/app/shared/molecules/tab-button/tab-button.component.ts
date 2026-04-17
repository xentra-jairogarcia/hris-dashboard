import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="tab"
      [class.active]="active"
      [class.pill]="variant === 'pill'"
      (click)="tabClick.emit()">
      {{ label }}
    </button>
  `,
  styleUrls: ['./tab-button.component.scss']
})
export class TabButtonComponent {
  @Input() label = 'Tab';
  @Input() active = false;
  @Input() variant: 'underline' | 'pill' = 'underline';
  @Output() tabClick = new EventEmitter<void>();
}
