import type { Meta, StoryObj } from '@storybook/angular';
import { Onboarding } from './onboarding';

const meta: Meta<Onboarding> = {
  title: 'Pages/Onboarding',
  component: Onboarding,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Onboarding>;

export const List: Story = {
  args: {},
};

export const Detail: Story = {
  args: {},
  render: (args) => ({
    props: {
      ...args,
      activeEmployeeId: 'ac',
      employees: args.employees,
      stats: args.stats,
    },
    template: `
      <app-onboarding 
        [employees]="employees" 
        [activeEmployeeId]="activeEmployeeId"
        [stats]="stats">
      </app-onboarding>
    `,
  }),
};
