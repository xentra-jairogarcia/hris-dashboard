import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard {
  title: string;
  value: number;
  color: string;
  icon: string;
}

interface RecentRequest {
  employee: string;
  type: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

interface BirthdayCelebrant {
  initials: string;
  name: string;
  role: string;
  date: string;
}

interface OnboardingItem {
  initials: string;
  name: string;
  role: string;
  startDate: string;
  progress: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  stats: StatCard[] = [
    { title: 'Total Employees', value: 67, color: 'blue', icon: '/total.png' },
    { title: 'Active Employees', value: 14, color: 'green', icon: '/active.png' },
    { title: 'On Leave', value: 14, color: 'purple', icon: '/leave.png' },
    { title: 'Pending Request', value: 14, color: 'orange', icon: '/pending.png' },
  ];

  recentRequests: RecentRequest[] = [
    { employee: 'Juan Dela Cruz', type: 'Type A', date: '01-25-2026', status: 'Pending' },
    { employee: 'Dwayne Wade', type: 'Type B', date: '01-17-2026', status: 'Pending' },
    { employee: 'James Yap', type: 'Type C', date: '01-16-2026', status: 'Approved' },
  ];

  birthdays: BirthdayCelebrant[] = [
    { initials: 'NS', name: 'Neil Salcedo', role: 'Backend', date: 'January 31.' },
    { initials: 'TS', name: 'Tanya Salcedo', role: 'Frontend', date: 'February 14.' },
  ];

  onboardingItems: OnboardingItem[] = [
    { initials: 'AC', name: 'Al Cedrick Garcia', role: 'Software Engineer', startDate: '2026-01-28', progress: 35 },
  ];

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }
}
