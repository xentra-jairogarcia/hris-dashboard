import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from './user';

@Component({
  selector: 'storybook-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <h1>Storybook</h1>
      <button *ngIf="!user" (click)="onCreateAccount.emit()">Sign up</button>
      <button *ngIf="!user" (click)="onLogin.emit()">Log in</button>
      <button *ngIf="user" (click)="onLogout.emit()">Log out</button>
      <p *ngIf="user">Welcome, {{ user.name }}!</p>
    </header>
  `,
  styles: [`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #e0e0e0;
    }
  `],
})
export class HeaderComponent {
  @Input() user: User | null = null;
  @Output() onLogin = new EventEmitter<void>();
  @Output() onLogout = new EventEmitter<void>();
  @Output() onCreateAccount = new EventEmitter<void>();
}
