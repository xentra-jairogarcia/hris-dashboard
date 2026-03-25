import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActionButtonComponent } from '../../shared/components/action-button/action-button.component';
import { TabButtonComponent } from '../../shared/components/tab-button/tab-button.component';
import { TextLinkButtonComponent } from '../../shared/components/text-link-button/text-link-button.component';

interface RequestItem {
  id: string;
  employee: string;
  type: string;
  date: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}

@Component({
  selector: 'app-request',
  imports: [CommonModule, RouterModule, ActionButtonComponent, TabButtonComponent, TextLinkButtonComponent],
  templateUrl: './request.html',
  styleUrl: './request.scss',
})
export class Request {
  requests: RequestItem[] = [
    { id: 'REQ001', employee: 'Juan Dela Cruz', type: 'Leave', date: '2026-01-15', status: 'Approved' },
    { id: 'REQ002', employee: 'Gwyneth Espinoza', type: 'COE', date: '2026-01-14', status: 'Pending' },
    { id: 'REQ003', employee: 'LeBron James', type: 'ABC', date: '2026-01-14', status: 'Approved' },
    { id: 'REQ004', employee: 'Kyrie Irving', type: 'DEF', date: '2026-01-13', status: 'Rejected' },
  ];

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }
}
