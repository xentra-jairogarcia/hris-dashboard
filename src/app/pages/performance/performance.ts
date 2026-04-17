import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabButtonComponent } from '../../shared/molecules/tab-button/tab-button.component';
import { ButtonComponent } from '../../shared/atoms/button/button.component';

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

interface CareerEntry {
  id: string;
  type: string;
  date: string;
  newValue: string;
  previous: string;
  reason: string;
}

interface CompensationEntry {
  date: string;
  basicSalary: string;
  allowances: string;
  total: string;
  change: string;
}

interface AssetAssignment {
  id: string;
  initials: string;
  assignedTo: string;
  assetName: string;
  assetType: string;
  assetIcon: 'laptop' | 'phone' | 'tablet';
  position: string;
  dateIssued: string;
  returnDate: string;
  status: 'Regular' | 'Returned' | 'Lost';
}

interface InventoryItem {
  id: string;
  name: string;
  icon: 'laptop' | 'phone' | 'tablet';
  badge: 'New' | 'Assigned' | 'Fail';
  quantity: number;
  status: 'In Stock' | 'Assigned' | 'Out of Stock';
}

@Component({
  selector: 'app-performance',
  imports: [CommonModule, FormsModule, TabButtonComponent, ButtonComponent],
  templateUrl: './performance.html',
  styleUrl: './performance.scss',
})
export class Performance {
  activePage: 'performance' | 'career' | 'assets' = 'performance';
  selectedReview: Review | null = null;
  activeTab: 'scores' | 'feedback' | 'recommendation' = 'scores';
  careerTab: 'history' | 'compensation' = 'history';
  assetsTab: 'assignments' | 'inventory' = 'assignments';
  assetSearchQuery = '';

  // Modal state
  showAssignModal = false;
  showAddInventoryModal = false;

  assignForm = {
    department: 'Software Development',
    assignedTo: '',
    assetType: 'Laptop',
    assetName: 'Macbook Pro 14"',
    dateIssued: '',
    returnDate: '',
    returnCondition: 'New',
  };

  inventoryForm = {
    assetName: 'Macbook Pro 14"',
    assetType: 'Laptop',
    condition: 'New',
    quantity: null as number | null,
    initialStatus: 'In Stock',
  };

  selectedCareerEmployee = 'Aljo Cullamco';
  selectedCareerPosition = 'Front-End Developer';

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

  careerHistory: CareerEntry[] = [
    { id: '1', type: 'Promotion', date: '2026-01-14', newValue: 'Senior Software Developer', previous: 'N/A', reason: 'Initial Hire' },
    { id: '2', type: 'Absorption', date: '2026-01-14', newValue: 'Regular', previous: 'N/A', reason: 'Initial Hire' },
    { id: '3', type: 'Hired', date: '2026-01-14', newValue: 'Front-End Developer', previous: 'N/A', reason: 'Initial Hire' },
  ];

  compensationHistory: CompensationEntry[] = [
    { date: '2026-01-29', basicSalary: 'PHP 45,000', allowances: 'PHP 5,000', total: 'PHP 50,000', change: '+15%' },
    { date: '2026-01-01', basicSalary: 'PHP 35,000', allowances: 'PHP 4,000', total: 'PHP 39,000', change: 'N/A' },
  ];

  assetAssignments: AssetAssignment[] = [
    { id: '1', initials: 'AC', assignedTo: 'Aljo Cullamco', assetName: 'Macbook Air', assetType: 'Laptop', assetIcon: 'laptop', position: 'Front End Developer', dateIssued: '2026-01-10', returnDate: 'N/A', status: 'Regular' },
    { id: '2', initials: 'AC', assignedTo: 'Ralph Cruz', assetName: 'Macbook Air', assetType: 'Laptop', assetIcon: 'laptop', position: 'UI/UX Designer', dateIssued: '2026-01-10', returnDate: 'N/A', status: 'Regular' },
    { id: '3', initials: 'AC', assignedTo: 'Lorenz Fuentes', assetName: 'Iphone 17 Pro', assetType: 'Phone', assetIcon: 'phone', position: 'Front End Developer', dateIssued: '2026-01-10', returnDate: 'N/A', status: 'Regular' },
  ];

  inventoryItems: InventoryItem[] = [
    { id: '1', name: 'Macbook Pro', icon: 'laptop', badge: 'New', quantity: 10, status: 'In Stock' },
    { id: '2', name: 'Macbook Air', icon: 'laptop', badge: 'Assigned', quantity: 5, status: 'Assigned' },
    { id: '3', name: 'Iphone 17 Pro', icon: 'phone', badge: 'Fail', quantity: 8, status: 'In Stock' },
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

  getAssetStatusClass(status: string): string {
    return status.toLowerCase().replace(' ', '-');
  }

  getBadgeClass(badge: string): string {
    return badge.toLowerCase();
  }

  getInventoryStatusClass(status: string): string {
    return status.toLowerCase().replace(' ', '-');
  }

  openAssetModal(): void {
    if (this.assetsTab === 'assignments') {
      this.showAssignModal = true;
    } else {
      this.showAddInventoryModal = true;
    }
  }

  closeAssetModal(): void {
    this.showAssignModal = false;
    this.assignForm = {
      department: 'Software Development',
      assignedTo: '',
      assetType: 'Laptop',
      assetName: 'Macbook Pro 14"',
      dateIssued: '',
      returnDate: '',
      returnCondition: 'New',
    };
  }

  closeInventoryModal(): void {
    this.showAddInventoryModal = false;
    this.inventoryForm = {
      assetName: 'Macbook Pro 14"',
      assetType: 'Laptop',
      condition: 'New',
      quantity: null,
      initialStatus: 'In Stock',
    };
  }

  submitAssignForm(): void {
    // Add assignment logic here
    this.closeAssetModal();
  }

  submitInventoryForm(): void {
    // Add inventory logic here
    this.closeInventoryModal();
  }
}