import { Routes } from '@angular/router';
import { MainLayout } from './core/layouts/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Employees } from './pages/employees/employees';
import { Projects } from './pages/projects/projects';
import { Request } from './pages/request/request';
import { Onboarding } from './pages/onboarding/onboarding';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'employees', component: Employees },
      { path: 'projects', component: Projects },
      { path: 'request', component: Request },
      { path: 'onboarding', component: Onboarding },
    ]
  }
];
