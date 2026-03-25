import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ActionButtonComponent } from '../../shared/components/action-button/action-button.component';

const meta: Meta<ActionButtonComponent> = {
  title: 'Pages/Onboarding/Buttons',
  component: ActionButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'blue'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { clicked: fn() },
};

export default meta;
type Story = StoryObj<ActionButtonComponent>;

export const ViewChecklist: Story = {
  args: {
    label: 'View Checklist',
    variant: 'primary',
    size: 'medium',
  },
};

export const GoBack: Story = {
  args: {
    label: 'Go Back',
    variant: 'secondary',
    size: 'small',
  },
};

export const TaskViewButton: Story = {
  args: {
    label: 'View',
    variant: 'outline',
    size: 'small',
  },
};
