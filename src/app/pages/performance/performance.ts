import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabButtonComponent } from '../../shared/components/tab-button/tab-button.component';
import { TextLinkButtonComponent } from '../../shared/components/text-link-button/text-link-button.component';

interface Review {
  id: string;
  employee: string;
  position: string;
  type: string;
  period: string;
  reviewer: string;
  reviewerDate: string;
  status: 'Draft' | 'Active' | 'Completed';
  scores: {
    overall: number;
    technicalSkills: number;
    softSkills: number;
    attendance: number;
    [key: string]: number;
  };
}

@Component({
  selector: 'app-performance',
  imports: [CommonModule, TabButtonComponent, TextLinkButtonComponent],
  templateUrl: './performance.html',
  styleUrl: './performance.scss',
})
export class Performance {
  selectedReview: Review | null = null;
  activeTab: 'scores' | 'feedback' | 'recommendation' = 'scores';

  scoreItems = [
    { key: 'technicalSkills', label: 'Technical Skills' },
    { key: 'softSkills', label: 'Soft Skills' },
    { key: 'attendance', label: 'Attendance' },
  ];

  reviews: Review[] = [
    {
      id: 'REV001',
      employee: 'Juan Dela Cruz',
      position: 'Front-End Developer',
      type: 'Annual',
      period: 'Q4 2025',
      reviewer: 'Steve Rogers',
      reviewerDate: '2026-01-15',
      status: 'Draft',
      scores: { overall: 4.5, technicalSkills: 4.0, softSkills: 4.0, attendance: 4.0 },
    },
    {
      id: 'REV002',
      employee: 'Gwyneth Espinoza',
      position: 'UI/UX Designer',
      type: 'Probation',
      period: 'Q3 2025',
      reviewer: 'Bruce Banner',
      reviewerDate: '2026-01-14',
      status: 'Draft',
      scores: { overall: 4.0, technicalSkills: 3.5, softSkills: 4.5, attendance: 4.0 },
    },
  ];

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }

  viewDetails(review: Review): void {
    this.selectedReview = review;
    this.activeTab = 'scores';
  }

  goBack(): void {
    this.selectedReview = null;
  }

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, i) => {
      const pos = i + 1;
      if (rating >= pos) return 'full';
      if (rating >= pos - 0.5) return 'half';
      return 'empty';
    });
  }
}