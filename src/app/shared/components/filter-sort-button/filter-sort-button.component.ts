import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-sort-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [ngClass]="['btn', variant]"
      type="button"
      (click)="clicked.emit($event)">
      {{ label }}
    </button>
  `,
  styleUrls: ['./filter-sort-button.component.scss']
})
export class FilterSortButtonComponent {
  @Input() label = 'Filter';
  @Input() variant: 'outline' | 'filled' = 'outline';
  @Output() clicked = new EventEmitter<Event>();
}
