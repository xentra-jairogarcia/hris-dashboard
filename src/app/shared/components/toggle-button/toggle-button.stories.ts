import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ToggleButtonComponent } from './toggle-button.component';

const meta: Meta<ToggleButtonComponent> = {
  title: 'Shared/ToggleButton',
  component: ToggleButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: ['list', 'card'],
    },
    active: { control: 'boolean' },
    title: { control: 'text' },
  },
  args: { toggled: fn() },
};

export default meta;
type Story = StoryObj<ToggleButtonComponent>;

export const ListViewActive: Story = {
  args: {
    icon: 'list',
    active: true,
    title: 'List View',
  },
};

export const ListViewInactive: Story = {
  args: {
    icon: 'list',
    active: false,
    title: 'List View',
  },
};

export const CardViewActive: Story = {
  args: {
    icon: 'card',
    active: true,
    title: 'Card View',
  },
};

export const CardViewInactive: Story = {
  args: {
    icon: 'card',
    active: false,
    title: 'Card View',
  },
};
