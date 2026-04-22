import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import type { ChartConfiguration } from 'chart.js';

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
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
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

  // ── Total Headcount ─ bar ─
  headcountChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Headcount',
        data: [58, 42, 35, 68, 45, 67],
        backgroundColor: '',
        borderRadius: 4,
      },
    ],
  };

  headcountChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: 12, right: 20, bottom: 4, left: 4 },
    },
    animation: {
      duration: 900,
      easing: 'easeOutQuart',
    },
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 20 } },
      x: { grid: { display: false } },
    },
  };

  // ── Attrition Rate ─ line ─
  attritionChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Attrition',
        data: [700, 450, 620, 500, 680, 550, 220],
        borderColor: '',
        backgroundColor: 'transparent',
        tension: 0.3,
        pointRadius: 3,
        pointBackgroundColor: '',
      },
    ],
  };

  attritionChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: 12, right: 20, bottom: 4, left: 4 },
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
    },
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 200 } },
      x: {
        grid: { display: false },
        offset: true,
      },
    },
  };

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const css = getComputedStyle(document.documentElement);
    const blue  = css.getPropertyValue('--color-blue-500').trim();
    const green = css.getPropertyValue('--color-green-500').trim();

    this.headcountChartData.datasets[0].backgroundColor = blue;
    this.attritionChartData.datasets[0].borderColor = green;
    this.attritionChartData.datasets[0].pointBackgroundColor = green;
  }

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }
}