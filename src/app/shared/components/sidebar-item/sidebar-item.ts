import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.scss'
})
export class SidebarItemComponent {
  @Input() label = '';
  @Input() icon = '';          // e.g., 'dashboard'
  @Input() route = '';
  @Input() badge?: number | string;
}