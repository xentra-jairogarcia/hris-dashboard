import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabButtonComponent } from '../../shared/components/tab-button/tab-button.component';
import { TextLinkButtonComponent } from '../../shared/components/text-link-button/text-link-button.component';

interface Review {
  id: string;
  employee: string;
  type: string;
  period: string;
  reviewer: string;
  reviewerDate: string;
  status: 'Draft' | 'Active' | 'Completed';
}

@Component({
  selector: 'app-performance',
  imports: [CommonModule, TabButtonComponent, TextLinkButtonComponent],
  templateUrl: './performance.html',
  styleUrl: './performance.scss',
})
export class Performance {
  reviews: Review[] = [
    { id: 'REV001', employee: 'Juan Dela Cruz', type: 'Annual', period: 'Q4 2025', reviewer: 'Steve Rogers', reviewerDate: '2026-01-15', status: 'Draft' },
    { id: 'REV002', employee: 'Gwyneth Espinoza', type: 'Probation', period: 'Q3 2025', reviewer: 'Bruce Banner', reviewerDate: '2026-01-14', status: 'Draft' },
  ];

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }
}
