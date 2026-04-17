import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/atoms/button/button.component';

interface Task {
  name: string;
  required: boolean;
  file: string;
  completed: boolean;
}

interface Employee {
  id: string;
  initials: string;
  name: string;
  role: string;
  startDate: string;
  completed: number;
  total: number;
  progress: number;
  tasks: Task[];
}

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './onboarding.html',
  styleUrls: ['./onboarding.scss']
})
export class Onboarding {
  activeEmployeeId: string | null = null;

  employees: Employee[] = [
    {
      id: 'ac',
      initials: 'AC',
      name: 'Al Cedrick Garcia',
      role: 'Software Engineer',
      startDate: '2026-01-28',  
      completed: 3,
      total: 8,
      progress: 35,
      tasks: [
        { name: 'Submit Government IDs', required: true, file: 'IDs.pdf', completed: true },
        { name: 'Complete PAF (Personnel Action Form)', required: true, file: 'PAF_completed.pdf', completed: false },
        { name: 'Sign NDA (Non-Disclosure Agreement)', required: true, file: 'NDA_signed.pdf', completed: false },
        { name: 'IT Equipment Setup', required: true, file: 'equipment_form.pdf', completed: false },
        { name: 'Benefits Enrollment', required: true, file: 'benefits_form.pdf', completed: false }
      ]
    },
    {
      id: 'lj',
      initials: 'LJ',
      name: 'Lebron James',
      role: 'Product Designer',
      startDate: '2026-02-03',
      completed: 5,
      total: 8,
      progress: 62,
      tasks: [
        { name: 'Submit Government IDs', required: true, file: 'IDs.pdf', completed: true },
        { name: 'Complete PAF (Personnel Action Form)', required: true, file: 'PAF_completed.pdf', completed: true },
        { name: 'Sign NDA (Non-Disclosure Agreement)', required: true, file: 'NDA_signed.pdf', completed: true },
        { name: 'IT Equipment Setup', required: true, file: 'equipment_form.pdf', completed: false },
        { name: 'Benefits Enrollment', required: true, file: 'benefits_form.pdf', completed: false }
      ]
    },
    {
      id: 'jt',
      initials: 'JT',
      name: 'Jason Tatum',
      role: 'Data Analyst',
      startDate: '2026-02-10',
      completed: 8,
      total: 8,
      progress: 100,
      tasks: [
        { name: 'Submit Government IDs', required: true, file: 'IDs.pdf', completed: true },
        { name: 'Complete PAF (Personnel Action Form)', required: true, file: 'PAF_completed.pdf', completed: true },
        { name: 'Sign NDA (Non-Disclosure Agreement)', required: true, file: 'NDA_signed.pdf', completed: true },
        { name: 'IT Equipment Setup', required: true, file: 'equipment_form.pdf', completed: true },
        { name: 'Benefits Enrollment', required: true, file: 'benefits_form.pdf', completed: true }
      ]
    },
    {
      id: 'sc',
      initials: 'SC',
      name: 'Stephen Curry',
      role: 'HR Specialist',
      startDate: '2026-02-17',
      completed: 1,
      total: 8,
      progress: 15,
      tasks: [
        { name: 'Submit Government IDs', required: true, file: 'IDs.pdf', completed: true },
        { name: 'Complete PAF (Personnel Action Form)', required: true, file: 'PAF_completed.pdf', completed: false },
        { name: 'Sign NDA (Non-Disclosure Agreement)', required: true, file: 'NDA_signed.pdf', completed: false },
        { name: 'IT Equipment Setup', required: true, file: 'equipment_form.pdf', completed: false },
        { name: 'Benefits Enrollment', required: true, file: 'benefits_form.pdf', completed: false }
      ]
    }
  ];

  stats = {
    total: 24,
    inProgress: 14,
    completed: 10
  };

  viewChecklist(id: string): void {
    this.activeEmployeeId = id;
  }

  back(): void {
    this.activeEmployeeId = null;
  }

  getEmployee(): Employee | undefined {
    return this.employees.find(emp => emp.id === this.activeEmployeeId);
  }
}