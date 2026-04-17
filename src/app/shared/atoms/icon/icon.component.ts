import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type IconName =
  | 'plus'
  | 'star'
  | 'save'
  | 'profile'
  | 'eye'
  | 'back'
  | 'filter'
  | 'sort';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container [ngSwitch]="name">
      <svg *ngSwitchCase="'plus'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"/>
      </svg>

      <svg *ngSwitchCase="'star'" [attr.width]="size" [attr.height]="size" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 1l2 4 4.5.7-3.3 3.1.8 4.5L8 11.2 3.9 13.3l.8-4.5L1.5 5.7 6 5z"/>
      </svg>

      <svg *ngSwitchCase="'save'" [attr.width]="size" [attr.height]="size" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12.5 14H3.5a1 1 0 01-1-1V3a1 1 0 011-1h7l3 3v8a1 1 0 01-1 1z"/>
        <path d="M11.5 14V9.5h-7V14"/>
        <path d="M4.5 2v3h5"/>
      </svg>

      <svg *ngSwitchCase="'profile'" [attr.width]="size" [attr.height]="size" viewBox="0 0 16 16" fill="currentColor">
        <circle cx="8" cy="5" r="3" fill="none" stroke="currentColor" stroke-width="1.4"/>
        <path d="M2.5 14.5C3 11.5 5.2 9.5 8 9.5s5 2 5.5 5" fill="none" stroke="currentColor" stroke-width="1.4"/>
      </svg>

      <svg *ngSwitchCase="'eye'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"/>
      </svg>

      <svg *ngSwitchCase="'back'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>

      <svg *ngSwitchCase="'filter'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
      </svg>

      <svg *ngSwitchCase="'sort'" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 6h13M3 12h9M3 18h5"/>
        <path d="M17 9l3-3 3 3"/>
        <path d="M20 6v12"/>
      </svg>
    </ng-container>
  `,
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() name!: IconName;
  @Input() size: number | string = 16;
}
