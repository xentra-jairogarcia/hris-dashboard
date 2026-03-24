import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from '../../shared/components/toggle-button/toggle-button.component';
import { FilterSortButtonComponent } from '../../shared/components/filter-sort-button/filter-sort-button.component';
import { ActionButtonComponent } from '../../shared/components/action-button/action-button.component';
import { IconButtonComponent } from '../../shared/components/icon-button/icon-button.component';
import { TabButtonComponent } from '../../shared/components/tab-button/tab-button.component';
import { TextLinkButtonComponent } from '../../shared/components/text-link-button/text-link-button.component';

interface Document {
  name: string;
  status: string;
}

interface Project {
  name: string;
  type: string;
  supervisor: string;
  startDate: string;
  badge: string;
}

interface Skill {
  name: string;
  experience: string;
  level: string;
}

interface Employee {
  id: string;
  name: string;
  initials: string;
  position: string;
  level: string;
  status: string;
  email: string;
  contact: string;
  birthdate: string;
  gender: string;
  emergencyContact: string;
  address: string;
  department: string;
  dateHired: string;
  originalHireDate: string;
  supervisor: string;
  documents: Document[];
  projects: Project[];
  skills: Skill[];
}

@Component({
  selector: 'app-employees',
  imports: [
    CommonModule,
    ToggleButtonComponent,
    FilterSortButtonComponent,
    ActionButtonComponent,
    IconButtonComponent,
    TabButtonComponent,
    TextLinkButtonComponent,
  ],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class Employees {
  viewMode: 'list' | 'card' = 'card';
  selectedEmployee: Employee | null = null;
  activeTab: 'personal' | 'employment' | 'documents' | 'projects' | 'skillset' = 'personal';

  private defaultDocs: Document[] = [
    { name: 'National ID', status: 'Uploaded' },
    { name: 'Employment Contract', status: 'Uploaded' },
    { name: 'Medical Certificate', status: 'Uploaded' },
  ];

  private defaultProjects: Project[] = [
    { name: 'Project 1', type: 'Primary', supervisor: 'Paul Diwa', startDate: '10-5-2025', badge: 'Primary' },
    { name: 'Project 1', type: 'Primary', supervisor: 'Primary', startDate: '10-5-2025', badge: 'Side' },
  ];

  private defaultSkills: Skill[] = [
    { name: 'Next.js', experience: '4 years Experience', level: 'Expert' },
    { name: 'Node.js', experience: '3 years experience', level: 'Intermediate' },
    { name: 'Python', experience: '6 years experience', level: 'Advanced' },
  ];

  employees: Employee[] = [
    {
      id: '2022-423942',
      name: 'Aljo Cullamco',
      initials: 'AC',
      position: 'Front End Developer',
      level: 'Senior',
      status: 'Regular',
      email: 'aljo.xentra@gmail.com',
      contact: '09958675678',
      birthdate: '12-24-2003',
      gender: 'Male',
      emergencyContact: 'Jane Cullamco',
      address: 'Guiguinto, Bulacan',
      department: 'Software Dev',
      dateHired: '03-24-2022',
      originalHireDate: '03-23-2020',
      supervisor: 'Lorenz Fuentez',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
    {
      id: '2020-34584',
      name: 'Ralph Cruz',
      initials: 'RC',
      position: 'UI/UX Designer',
      level: 'Mid',
      status: 'Regular',
      email: 'ralph.cruz@gmail.com',
      contact: '09951234567',
      birthdate: '05-15-1998',
      gender: 'Male',
      emergencyContact: 'Maria Cruz',
      address: 'Makati, Metro Manila',
      department: 'Design',
      dateHired: '06-15-2020',
      originalHireDate: '06-15-2020',
      supervisor: 'Paul Diwa',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
    {
      id: '2020-34584',
      name: 'Lorenz Fuentes',
      initials: 'LF',
      position: 'Front End Developer',
      level: 'Junior',
      status: 'Regular',
      email: 'lorenz.fuentes@gmail.com',
      contact: '09967891234',
      birthdate: '09-10-2000',
      gender: 'Male',
      emergencyContact: 'Ana Fuentes',
      address: 'Quezon City, Metro Manila',
      department: 'Software Dev',
      dateHired: '01-10-2021',
      originalHireDate: '01-10-2021',
      supervisor: 'Aljo Cullamco',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
    {
      id: '2022-423942',
      name: 'Maria Santos',
      initials: 'MS',
      position: 'Backend Developer',
      level: 'Senior',
      status: 'Regular',
      email: 'maria.santos@gmail.com',
      contact: '09934567890',
      birthdate: '03-22-1997',
      gender: 'Female',
      emergencyContact: 'Jose Santos',
      address: 'Pasig, Metro Manila',
      department: 'Software Dev',
      dateHired: '03-24-2022',
      originalHireDate: '03-22-2020',
      supervisor: 'Lorenz Fuentez',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
    {
      id: '2022-423942',
      name: 'Carlo Reyes',
      initials: 'CR',
      position: 'Full Stack Developer',
      level: 'Mid',
      status: 'Regular',
      email: 'carlo.reyes@gmail.com',
      contact: '09912345678',
      birthdate: '07-08-1999',
      gender: 'Male',
      emergencyContact: 'Elena Reyes',
      address: 'Taguig, Metro Manila',
      department: 'Software Dev',
      dateHired: '08-01-2022',
      originalHireDate: '08-01-2022',
      supervisor: 'Paul Diwa',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
    {
      id: '2022-423942',
      name: 'Angela Deo',
      initials: 'AD',
      position: 'QA Engineer',
      level: 'Junior',
      status: 'Regular',
      email: 'angela.deo@gmail.com',
      contact: '09987654321',
      birthdate: '11-30-2001',
      gender: 'Female',
      emergencyContact: 'Roberto Deo',
      address: 'Mandaluyong, Metro Manila',
      department: 'Quality Assurance',
      dateHired: '05-15-2023',
      originalHireDate: '05-15-2023',
      supervisor: 'Maria Santos',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
    {
      id: '2022-423942',
      name: 'Angela Deo',
      initials: 'AD',
      position: 'QA Engineer',
      level: 'Junior',
      status: 'Regular',
      email: 'angela.deo@gmail.com',
      contact: '09987654321',
      birthdate: '11-30-2001',
      gender: 'Female',
      emergencyContact: 'Roberto Deo',
      address: 'Mandaluyong, Metro Manila',
      department: 'Quality Assurance',
      dateHired: '05-15-2023',
      originalHireDate: '05-15-2023',
      supervisor: 'Maria Santos',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
    {
      id: '2022-423942',
      name: 'Angela Deo',
      initials: 'AD',
      position: 'QA Engineer',
      level: 'Junior',
      status: 'Regular',
      email: 'angela.deo@gmail.com',
      contact: '09987654321',
      birthdate: '11-30-2001',
      gender: 'Female',
      emergencyContact: 'Roberto Deo',
      address: 'Mandaluyong, Metro Manila',
      department: 'Quality Assurance',
      dateHired: '05-15-2023',
      originalHireDate: '05-15-2023',
      supervisor: 'Maria Santos',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
    {
      id: '2022-423942',
      name: 'Angela Deo',
      initials: 'AD',
      position: 'QA Engineer',
      level: 'Junior',
      status: 'Regular',
      email: 'angela.deo@gmail.com',
      contact: '09987654321',
      birthdate: '11-30-2001',
      gender: 'Female',
      emergencyContact: 'Roberto Deo',
      address: 'Mandaluyong, Metro Manila',
      department: 'Quality Assurance',
      dateHired: '05-15-2023',
      originalHireDate: '05-15-2023',
      supervisor: 'Maria Santos',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
    {
      id: '2022-423942',
      name: 'Angela Deo',
      initials: 'AD',
      position: 'QA Engineer',
      level: 'Junior',
      status: 'Regular',
      email: 'angela.deo@gmail.com',
      contact: '09987654321',
      birthdate: '11-30-2001',
      gender: 'Female',
      emergencyContact: 'Roberto Deo',
      address: 'Mandaluyong, Metro Manila',
      department: 'Quality Assurance',
      dateHired: '05-15-2023',
      originalHireDate: '05-15-2023',
      supervisor: 'Maria Santos',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
  ];

  viewProfile(employee: Employee): void {
    this.selectedEmployee = employee;
    this.activeTab = 'personal';
  }

  closeProfile(): void {
    this.selectedEmployee = null;
  }

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }

  getLevelClass(level: string): string {
    return level.toLowerCase();
  }

  getSkillLevelClass(level: string): string {
    return level.toLowerCase();
  }

  getProjectBadgeClass(badge: string): string {
    return badge.toLowerCase();
  }
}
