import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
import type { ChartConfiguration } from 'chart.js';
import { ButtonComponent } from '../../shared/atoms/button/button.component';
import { SelectButtonComponent, SelectOption } from '../../shared/atoms/select-button/select-button.component';
import { TabButtonComponent } from '../../shared/molecules/tab-button/tab-button.component';
import {
  headcountStats,
  headcountByDepartment,
  genderDistribution,
  genderByDepartment,
  attritionStats,
  attritionTrend,
  onboardingStats,
  onboardingByMonth,
  exitStats,
  exitReasons,
  staffingStats,
  staffingByProject,
} from './reports-mock-data';

type ReportTab =
  | 'headcount'
  | 'gad'
  | 'attrition'
  | 'onboarding'
  | 'exit'
  | 'project-staffing';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, SelectButtonComponent, TabButtonComponent, BaseChartDirective],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class Reports implements OnInit {
  activeTab: ReportTab = 'headcount';
  period: '3m' | '6m' | '12m' = '6m';
  subsidiary = 'all';

  periodOptions: SelectOption[] = [
    { label: 'Last 3 Months',  value: '3m' },
    { label: 'Last 6 Months',  value: '6m' },
    { label: 'Last 12 Months', value: '12m' },
  ];

  subsidiaryOptions: SelectOption[] = [
    { label: 'Subsidiary', value: 'all' },
  ];

  stats = headcountStats;
  attritionStats = attritionStats;
  onboardingStats = onboardingStats;
  exitStats = exitStats;
  staffingStats = staffingStats;

  // ── Headcount ─ bar chart ─
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: headcountByDepartment.labels,
    datasets: [
      { label: 'Male',   data: headcountByDepartment.male,   backgroundColor: '' },
      { label: 'Female', data: headcountByDepartment.female, backgroundColor: '' },
    ],
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 8 } },
      x: { grid: { display: false } },
    },
  };

  // ── GAD ─ pie + bar ─
  genderPieData: ChartConfiguration<'pie'>['data'] = {
    labels: genderDistribution.labels,
    datasets: [
      {
        data: genderDistribution.values,
        backgroundColor: ['', ''],
        borderWidth: 0,
      },
    ],
  };

  genderPieOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } },
  };

  genderByDeptData: ChartConfiguration<'bar'>['data'] = {
    labels: genderByDepartment.labels,
    datasets: [
      { label: 'Male',   data: genderByDepartment.male,   backgroundColor: '' },
      { label: 'Female', data: genderByDepartment.female, backgroundColor: '' },
    ],
  };

  genderByDeptOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } },
    scales: {
      y: { beginAtZero: true, grid: { display: false }, ticks: { display: false } },
      x: { grid: { display: false }, ticks: { font: { size: 10 } } },
    },
  };

  // ── Attrition ─ line ─
  attritionLineData: ChartConfiguration<'line'>['data'] = {
    labels: attritionTrend.labels,
    datasets: [
      {
        data: attritionTrend.values,
        borderColor: '',
        backgroundColor: 'transparent',
        tension: 0.25,
        pointRadius: 3,
        pointBackgroundColor: '',
      },
    ],
  };

  attritionLineOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 2 } },
      x: { grid: { display: false } },
    },
  };

  // ── Onboarding ─ bar ─
  onboardingChartData: ChartConfiguration<'bar'>['data'] = {
    labels: onboardingByMonth.labels,
    datasets: [
      { label: 'Starts',    data: onboardingByMonth.starts,    backgroundColor: '' },
      { label: 'Completed', data: onboardingByMonth.completed, backgroundColor: '' },
    ],
  };

  onboardingChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 2 } },
      x: { grid: { display: false } },
    },
  };

  // ── Exit ─ doughnut ─
  exitReasonsData: ChartConfiguration<'doughnut'>['data'] = {
    labels: exitReasons.labels,
    datasets: [
      {
        data: exitReasons.values,
        backgroundColor: ['', '', '', '', ''],
        borderWidth: 0,
      },
    ],
  };

  exitReasonsOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } },
    cutout: '60%',
  };

  // ── Project Staffing ─ stacked bar ─
  staffingChartData: ChartConfiguration<'bar'>['data'] = {
    labels: staffingByProject.labels,
    datasets: [
      { label: 'Staffed', data: staffingByProject.staffed, backgroundColor: '' },
      { label: 'Open',    data: staffingByProject.open,    backgroundColor: '' },
    ],
  };

  staffingChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } },
    scales: {
      y: { beginAtZero: true, stacked: true, ticks: { stepSize: 2 } },
      x: { stacked: true, grid: { display: false } },
    },
  };

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const css = getComputedStyle(document.documentElement);
    const v = (name: string) => css.getPropertyValue(name).trim();

    const green   = v('--color-green-500');
    const blue    = v('--color-blue-500');
    const purple  = v('--color-purple-500');
    const orange  = v('--color-orange-500');
    const neutral = v('--color-black-200');

    // Headcount — Male / Female
    this.barChartData.datasets[0].backgroundColor = blue;
    this.barChartData.datasets[1].backgroundColor = purple;

    // GAD — Gender pie + Gender by Dept
    (this.genderPieData.datasets[0].backgroundColor as string[])[0] = blue;
    (this.genderPieData.datasets[0].backgroundColor as string[])[1] = purple;
    this.genderByDeptData.datasets[0].backgroundColor = blue;
    this.genderByDeptData.datasets[1].backgroundColor = purple;

    // Attrition — trend line
    this.attritionLineData.datasets[0].borderColor = green;
    this.attritionLineData.datasets[0].pointBackgroundColor = green;

    // Onboarding — Starts / Completed
    this.onboardingChartData.datasets[0].backgroundColor = blue;
    this.onboardingChartData.datasets[1].backgroundColor = green;

    // Exit reasons — 5 Xentra palette colors
    const exitPalette = [green, blue, purple, orange, neutral];
    this.exitReasonsData.datasets[0].backgroundColor = exitPalette;

    // Project Staffing — Staffed / Open
    this.staffingChartData.datasets[0].backgroundColor = green;
    this.staffingChartData.datasets[1].backgroundColor = orange;
  }
}
