import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

export type SelectButtonVariant = 'filled' | 'outline';
export type SelectButtonSize = 'small' | 'medium' | 'large';

export interface SelectOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectButtonComponent),
      multi: true,
    },
  ],
  template: `
    <label
      [ngClass]="[
        'select-btn',
        'select-btn--' + variant,
        'select-btn--' + size
      ]"
      [class.select-btn--disabled]="disabled">
      <select
        class="select-btn__native"
        [disabled]="disabled"
        [ngModel]="value"
        (ngModelChange)="onChange($event)"
        (blur)="onTouched()">
        @if (placeholder) {
          <option value="" disabled>{{ placeholder }}</option>
        }
        @for (opt of options; track opt.value) {
          <option [value]="opt.value">{{ opt.label }}</option>
        }
      </select>
      <span class="select-btn__label">{{ displayLabel }}</span>
      <svg class="select-btn__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </label>
  `,
  styleUrls: ['./select-button.component.scss'],
})
export class SelectButtonComponent implements ControlValueAccessor {
  @Input() options: SelectOption[] = [];
  @Input() variant: SelectButtonVariant = 'outline';
  @Input() size: SelectButtonSize = 'medium';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  onChange = (val: string) => {
    this.value = val;
    this.valueChange.emit(val);
    this._onChange(val);
  };
  onTouched = () => this._onTouched();

  private _onChange: (val: string) => void = () => {};
  private _onTouched: () => void = () => {};

  get displayLabel(): string {
    const match = this.options.find((o) => o.value === this.value);
    return match?.label ?? this.placeholder;
  }

  writeValue(val: string): void {
    this.value = val ?? '';
  }
  registerOnChange(fn: (val: string) => void): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
