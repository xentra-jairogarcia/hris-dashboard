import { moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarItemComponent } from './sidebar-item';

export default {
  title: 'Shared/SidebarItem',
  component: SidebarItemComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    route: { control: 'text' },
    badge: { control: 'text' },
  },
};

export const Default = {
  args: {
    label: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard',
  },
};

export const WithBadge = {
  args: {
    label: 'Notifications',
    icon: 'notifications',
    route: '/notifications',
    badge: '3',
  },
};

export const Active = {
  args: {
    label: 'Employees',
    icon: 'employees',
    route: '/employees',
  },
  parameters: {
    router: { url: '/employees' }, 
  },
};