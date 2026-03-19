import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}

@Component({
  selector: 'app-employees',
  imports: [CommonModule],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class Employees {
  viewMode: 'list' | 'card' = 'card';
  selectedEmployee: Employee | null = null;

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
    },
  ];

  viewProfile(employee: Employee): void {
    this.selectedEmployee = employee;
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
}
