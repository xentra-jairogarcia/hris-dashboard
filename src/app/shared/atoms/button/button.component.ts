import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconComponent, IconName } from '../icon/icon.component';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'blue'
  | 'filter-sort-outline'
  | 'filter-sort-filled'
  | 'text-link'
  | 'icon-only';

export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
  host: {
    '[class.full-width]': 'fullWidth',
  },
  template: `
    <button
      [ngClass]="[
        'btn',
        'btn--' + variant,
        'btn--' + size
      ]"
      [class.btn--full]="fullWidth"
      [class.btn--has-icon]="icon"
      [type]="type"
      [disabled]="disabled"
      [attr.title]="title || null"
      (click)="clicked.emit($event)">
      <app-icon
        *ngIf="icon && iconPosition === 'left'"
        [name]="icon"
        [size]="iconSizePx">
      </app-icon>
      <span *ngIf="label" class="btn__label">{{ label }}</span>
      <app-icon
        *ngIf="icon && iconPosition === 'right'"
        [name]="icon"
        [size]="iconSizePx">
      </app-icon>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = '';
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() icon?: IconName;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() title = '';
  @Output() clicked = new EventEmitter<Event>();

  get iconSizePx(): number {
    if (this.variant === 'icon-only') return 24;
    if (this.variant === 'text-link') return 20;
    return 16;
  }
}
