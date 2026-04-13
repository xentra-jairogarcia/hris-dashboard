import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionButtonComponent } from '../../shared/components/action-button/action-button.component';
import { TabButtonComponent } from '../../shared/components/tab-button/tab-button.component';
import { TextLinkButtonComponent } from '../../shared/components/text-link-button/text-link-button.component';
import { IconButtonComponent } from '../../shared/components/icon-button/icon-button.component';

interface RequestItem {
  id: string;
  employee: string;
  type: string;
  date: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  requestId: string;
  dateSubmitted: string;
  startDate: string;
  endDate: string;
  reason: string;
}

type RequestType = 'Leave' | 'COE' | 'COS' | 'Exit' | null;
type ViewMode = 'list' | 'detail' | 'create';

@Component({
  selector: 'app-request',
  imports: [CommonModule, FormsModule, ActionButtonComponent, TabButtonComponent, TextLinkButtonComponent, IconButtonComponent],
  templateUrl: './request.html',
  styleUrl: './request.scss',
})
export class Request {
  viewMode: ViewMode = 'list';
  selectedRequest: RequestItem | null = null;

  // Create form state
  selectedType: RequestType = null;
  formStartDate = '';
  formEndDate = '';
  formLastWorkingDay = '';
  formReason = '';
  formFiles: File[] = [];

  requestTypes: { key: RequestType; label: string; description: string }[] = [
    { key: 'Leave', label: 'Leave', description: 'Request time off' },
    { key: 'COE', label: 'COE', description: 'Certificate of Employment' },
    { key: 'COS', label: 'COS', description: 'Certificate of Service' },
    { key: 'Exit', label: 'Exit', description: 'Exit Clearance' },
  ];

  requests: RequestItem[] = [
    {
      id: 'REQ001',
      employee: 'Alcedrick Garcia',
      type: 'Leave',
      date: '2026-01-15',
      status: 'Pending',
      requestId: '19234',
      dateSubmitted: '2022-423942',
      startDate: '10-24-2026',
      endDate: '10-26-2026',
      reason: 'Family Vacation',
    },
    {
      id: 'REQ002',
      employee: 'Gwyneth Espinoza',
      type: 'COE',
      date: '2026-01-14',
      status: 'Pending',
      requestId: '19235',
      dateSubmitted: '2022-423943',
      startDate: '01-14-2026',
      endDate: '01-14-2026',
      reason: 'Certificate of Employment',
    },
    {
      id: 'REQ003',
      employee: 'LeBron James',
      type: 'Leave',
      date: '2026-01-14',
      status: 'Approved',
      requestId: '19236',
      dateSubmitted: '2022-423944',
      startDate: '01-20-2026',
      endDate: '01-22-2026',
      reason: 'Personal Matter',
    },
    {
      id: 'REQ004',
      employee: 'Kyrie Irving',
      type: 'Leave',
      date: '2026-01-13',
      status: 'Rejected',
      requestId: '19237',
      dateSubmitted: '2022-423945',
      startDate: '01-18-2026',
      endDate: '01-19-2026',
      reason: 'Medical Appointment',
    },
  ];

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }

  viewDetails(request: RequestItem): void {
    this.selectedRequest = request;
    this.viewMode = 'detail';
  }

  closeDetails(): void {
    this.selectedRequest = null;
    this.viewMode = 'list';
  }

  approveRequest(): void {
    if (this.selectedRequest) {
      this.selectedRequest.status = 'Approved';
    }
  }

  rejectRequest(): void {
    if (this.selectedRequest) {
      this.selectedRequest.status = 'Rejected';
    }
  }

  // Create form methods
  openCreateForm(): void {
    this.resetForm();
    this.viewMode = 'create';
  }

  cancelCreate(): void {
    this.resetForm();
    this.viewMode = 'list';
  }

  selectType(type: RequestType): void {
    this.selectedType = type;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.formFiles = [...this.formFiles, ...Array.from(input.files)];
    }
  }

  removeFile(index: number): void {
    this.formFiles.splice(index, 1);
  }

  submitRequest(): void {
    if (!this.selectedType) return;

    const newId = `REQ${String(this.requests.length + 1).padStart(3, '0')}`;
    const today = new Date().toISOString().split('T')[0];

    this.requests.unshift({
      id: newId,
      employee: 'HR Admin',
      type: this.selectedType,
      date: today,
      status: 'Pending',
      requestId: String(19234 + this.requests.length),
      dateSubmitted: today,
      startDate: this.formStartDate || this.formLastWorkingDay || '',
      endDate: this.formEndDate || '',
      reason: this.formReason,
    });

    this.resetForm();
    this.viewMode = 'list';
  }

  private resetForm(): void {
    this.selectedType = null;
    this.formStartDate = '';
    this.formEndDate = '';
    this.formLastWorkingDay = '';
    this.formReason = '';
    this.formFiles = [];
  }
}