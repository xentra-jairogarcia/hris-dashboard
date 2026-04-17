import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/atoms/button/button.component';
import { TabButtonComponent } from '../../shared/molecules/tab-button/tab-button.component';

export interface AssignedEmployee {
  initials: string;
  name: string;
  position: string;
  assignmentType: 'Primary' | 'Side';
  supervisor: string;
}

export interface Project {
  id: string;
  name: string;
  supervisor: string;
  status: 'Active' | 'Planning' | 'On Hold' | 'Completed';
  headcount: number;
  client: string;
  startDate: string;
  endDate: string;
  description: string;
  assignedEmployees: AssignedEmployee[];
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, FormsModule, ButtonComponent, TabButtonComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  searchQuery = '';
  selectedStatus = '';
  activeTab: 'overview' | 'assigned employees' = 'overview';
  selectedProject: Project | null = null;

  statuses = ['All Status', 'Active', 'Planning', 'On Hold', 'Completed'];

  projects: Project[] = [
    {
      id: 'Prj2026',
      name: 'Project 1',
      supervisor: 'Jairo Garcia',
      status: 'Active',
      headcount: 12,
      client: 'Client 24',
      startDate: '02-24-2026',
      endDate: '02-26-2026',
      description: 'Enterprise',
      assignedEmployees: [
        { initials: 'AC', name: 'Aljo Cullamco', position: 'Senior Back End', assignmentType: 'Primary', supervisor: 'Jairo Garcia' },
        { initials: 'AC', name: 'Aljo Cullamco', position: 'Project 2', assignmentType: 'Side', supervisor: 'Ralph Cruz' },
      ],
    },
    {
      id: 'Prj2027',
      name: 'Project 2',
      supervisor: 'Ralph Cruz',
      status: 'Active',
      headcount: 4,
      client: 'Client 12',
      startDate: '03-01-2026',
      endDate: '06-15-2026',
      description: 'Internal Tool',
      assignedEmployees: [],
    },
    {
      id: 'Prj2028',
      name: 'Project 3',
      supervisor: 'Paul Diwa',
      status: 'Planning',
      headcount: 4,
      client: 'Client 8',
      startDate: '04-10-2026',
      endDate: '08-20-2026',
      description: 'Startup',
      assignedEmployees: [],
    },
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
    this.viewProject(project);
  }

  viewProject(project: Project): void {
    this.selectedProject = project;
    this.activeTab = 'overview';
  }

  setActiveTab(tab: 'overview' | 'assigned employees'): void {
    this.activeTab = tab;
  }

  closeProject(): void {
    this.selectedProject = null;
  }

  getAssignmentBadgeClass(type: string): string {
    return type === 'Primary' ? 'badge-primary' : 'badge-side';
  }
}
