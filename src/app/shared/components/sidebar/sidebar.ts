import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive, SidebarItemComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})

export class Sidebar {
  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Employees', icon: 'employees', route: '/employees' },
    { label: 'Projects', icon: 'projects', route: '/projects' },
    { label: 'Requests', icon: 'request', route: '/requests' },
    { label: 'Onboarding', icon: 'onboarding', route: '/onboarding' },
    { label: 'Performance', icon: 'performance', route: '/performance' },
    { label: 'Reports', icon: 'reports', route: '/reports' },
    { label: 'Notifications', icon: 'notifications', route: '/notifications', badge: '3' },
    { label: 'Settings', icon: 'settings', route: '/settings' },
  ];
}


