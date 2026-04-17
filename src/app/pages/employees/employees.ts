import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from '../../shared/molecules/toggle-button/toggle-button.component';
import { ButtonComponent } from '../../shared/atoms/button/button.component';
import { TabButtonComponent } from '../../shared/molecules/tab-button/tab-button.component';

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
  level: 'Mid' | 'Junior' | 'Lead' | 'Senior';
  status: 'Regular' | 'Probationary' | 'OJT';
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

type SortKey = 'name-asc' | 'name-desc' | 'level' | 'id-asc' | 'id-desc';
type StatusFilter = 'All' | 'Regular' | 'Probationary' | 'OJT';
type LevelFilter = 'All' | 'Junior' | 'Mid' | 'Senior' | 'Lead';

@Component({
  selector: 'app-employees',
  imports: [
    CommonModule,
    ToggleButtonComponent,
    ButtonComponent,
    TabButtonComponent,
  ],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class Employees {
  viewMode: 'list' | 'card' = 'card';
  selectedEmployee: Employee | null = null;
  activeTab: 'personal' | 'employment' | 'documents' | 'projects' | 'skillset' = 'personal';
  currentPage = 1;
  itemsPerPage = 9;

  searchTerm = '';
  statusFilter: StatusFilter = 'All';
  levelFilter: LevelFilter = 'All';
  sortKey: SortKey = 'name-asc';
  showFilterMenu = false;
  showSortMenu = false;

  statusOptions: StatusFilter[] = ['All', 'Regular', 'Probationary', 'OJT'];
  levelOptions: LevelFilter[] = ['All', 'Junior', 'Mid', 'Senior', 'Lead'];
  sortOptions: { key: SortKey; label: string }[] = [
    { key: 'name-asc', label: 'Name (A–Z)' },
    { key: 'name-desc', label: 'Name (Z–A)' },
    { key: 'id-asc', label: 'Employee ID (Asc)' },
    { key: 'id-desc', label: 'Employee ID (Desc)' },
    { key: 'level', label: 'Level (Junior → Lead)' },
  ];

  private levelOrder: Record<Employee['level'], number> = {
    Junior: 1, Mid: 2, Senior: 3, Lead: 4,
  };

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
      id: '2021-11023',
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
      id: '2022-98731',
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
      id: '2023-51823',
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
      id: '2023-51824',
      name: 'Patricia Lim',
      initials: 'PL',
      position: 'Product Manager',
      level: 'Senior',
      status: 'Regular',
      email: 'patricia.lim@gmail.com',
      contact: '09971234567',
      birthdate: '04-12-1995',
      gender: 'Female',
      emergencyContact: 'Robert Lim',
      address: 'BGC, Taguig',
      department: 'Product',
      dateHired: '02-01-2021',
      originalHireDate: '02-01-2021',
      supervisor: 'Paul Diwa',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
    {
      id: '2023-51825',
      name: 'Diego Ramos',
      initials: 'DR',
      position: 'DevOps Engineer',
      level: 'Mid',
      status: 'Regular',
      email: 'diego.ramos@gmail.com',
      contact: '09962345678',
      birthdate: '08-20-1998',
      gender: 'Male',
      emergencyContact: 'Elena Ramos',
      address: 'Caloocan, Metro Manila',
      department: 'Software Dev',
      dateHired: '07-10-2022',
      originalHireDate: '07-10-2022',
      supervisor: 'Aljo Cullamco',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
    {
      id: '2023-51826',
      name: 'Sofia Mendoza',
      initials: 'SM',
      position: 'Marketing Specialist',
      level: 'Junior',
      status: 'Probationary',
      email: 'sofia.mendoza@gmail.com',
      contact: '09953456789',
      birthdate: '02-14-2002',
      gender: 'Female',
      emergencyContact: 'Carlos Mendoza',
      address: 'Marikina, Metro Manila',
      department: 'Marketing',
      dateHired: '11-01-2023',
      originalHireDate: '11-01-2023',
      supervisor: 'Patricia Lim',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
    {
      id: '2023-51827',
      name: 'Marco Villanueva',
      initials: 'MV',
      position: 'Data Analyst',
      level: 'Mid',
      status: 'Regular',
      email: 'marco.villanueva@gmail.com',
      contact: '09944567890',
      birthdate: '06-30-1997',
      gender: 'Male',
      emergencyContact: 'Luz Villanueva',
      address: 'Parañaque, Metro Manila',
      department: 'Product',
      dateHired: '03-15-2022',
      originalHireDate: '03-15-2022',
      supervisor: 'Patricia Lim',
      documents: this.defaultDocs,
      projects: this.defaultProjects,
      skills: this.defaultSkills,
    },
  ];

  get filteredEmployees(): Employee[] {
    const term = this.searchTerm.trim().toLowerCase();
    const list = this.employees.filter((e) => {
      if (this.statusFilter !== 'All' && e.status !== this.statusFilter) return false;
      if (this.levelFilter !== 'All' && e.level !== this.levelFilter) return false;
      if (term && !e.name.toLowerCase().includes(term) && !e.id.toLowerCase().includes(term)) return false;
      return true;
    });

    const sorted = [...list];
    switch (this.sortKey) {
      case 'name-asc':  sorted.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'name-desc': sorted.sort((a, b) => b.name.localeCompare(a.name)); break;
      case 'id-asc':    sorted.sort((a, b) => a.id.localeCompare(b.id)); break;
      case 'id-desc':   sorted.sort((a, b) => b.id.localeCompare(a.id)); break;
      case 'level':     sorted.sort((a, b) => this.levelOrder[a.level] - this.levelOrder[b.level]); break;
    }
    return sorted;
  }

  get paginatedEmployees(): Employee[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredEmployees.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredEmployees.length / this.itemsPerPage));
  }

  get showingStart(): number {
    if (this.filteredEmployees.length === 0) return 0;
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get showingEnd(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredEmployees.length);
  }

  get activeFilterCount(): number {
    return (this.statusFilter !== 'All' ? 1 : 0) + (this.levelFilter !== 'All' ? 1 : 0);
  }

  toggleFilterMenu(): void {
    this.showFilterMenu = !this.showFilterMenu;
    if (this.showFilterMenu) this.showSortMenu = false;
  }

  toggleSortMenu(): void {
    this.showSortMenu = !this.showSortMenu;
    if (this.showSortMenu) this.showFilterMenu = false;
  }

  applyStatusFilter(value: StatusFilter): void {
    this.statusFilter = value;
    this.currentPage = 1;
  }

  applyLevelFilter(value: LevelFilter): void {
    this.levelFilter = value;
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.statusFilter = 'All';
    this.levelFilter = 'All';
    this.currentPage = 1;
  }

  applySort(key: SortKey): void {
    this.sortKey = key;
    this.showSortMenu = false;
  }

  onSearchChange(value: string): void {
    this.searchTerm = value;
    this.currentPage = 1;
  }

  sortLabel(): string {
    return this.sortOptions.find((o) => o.key === this.sortKey)?.label ?? 'Sort';
  }

  viewProfile(employee: Employee): void {
    this.selectedEmployee = employee;
    this.activeTab = 'personal';
  }

  closeProfile(): void {
    this.selectedEmployee = null;
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }


  getLevelClass(level: string): string {
    return level.toLowerCase();
  }

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }

  getSkillLevelClass(level: string): string {
    return level.toLowerCase();
  }

  getProjectBadgeClass(badge: string): string {
    return badge.toLowerCase();
  }
}
