import { Routes } from '@angular/router';
import { MainLayout } from './core/layouts/main-layout/main-layout';
import { authGuard, guestGuard } from './core/auth/auth.guard';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Employees } from './pages/employees/employees';
import { Projects } from './pages/projects/projects';
import { Request } from './pages/request/request';
import { Onboarding} from './pages/onboarding/onboarding';
import { Performance } from './pages/performance/performance';
import { Reports } from './pages/reports/reports';
import { Notifications } from './pages/notifications/notifications';
import { Settings } from './pages/settings/settings';


export const routes: Routes = [
  { path: 'login', component: Login, canActivate: [guestGuard] },
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'employees', component: Employees },
      { path: 'projects', component: Projects },
      { path: 'request', component: Request },
      { path: 'onboarding', component: Onboarding },
      { path: 'performance', component: Performance },
      { path: 'reports', component: Reports },
      { path: 'notifications', component: Notifications },
      { path: 'settings', component: Settings }
    ]
  }
];
