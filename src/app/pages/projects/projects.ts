import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Project {
  id: string;
  name: string;
  supervisor: string;
  status: 'Active' | 'Planning' | 'On Hold' | 'Completed';
  headcount: number;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  searchQuery = '';
  selectedStatus = '';

  statuses = ['All Status', 'Active', 'Planning', 'On Hold', 'Completed'];

  projects: Project[] = [
    { id: '2020-34584', name: 'HRIS',         supervisor: 'Male', status: 'Active',   headcount: 12 },
    { id: '2020-34524', name: 'Projvvvect 2', supervisor: 'Male', status: 'Active',   headcount: 4  },
    { id: '2022-34544', name: 'Project 3',    supervisor: 'Male', status: 'Planning', headcount: 4  },
  ];

  get filteredProjects(): Project[] {
    return this.projects.filter(p => {
      const matchesSearch =
        p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        p.id.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesStatus =
        !this.selectedStatus || this.selectedStatus === 'All Status'
          ? true
          : p.status === this.selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }

  onStatusChange(value: string): void {
    this.selectedStatus = value === 'All Status' ? '' : value;
  }

  onNewProject(): void {
    // Wire up your modal or route here
  }

  onViewDetails(project: Project): void {
    // Wire up your modal or route here
  }
}