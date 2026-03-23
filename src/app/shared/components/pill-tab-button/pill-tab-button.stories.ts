import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { PillTabButtonComponent } from './pill-tab-button.component';

const meta: Meta<PillTabButtonComponent> = {
  title: 'Shared/PillTabButton',
  component: PillTabButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    active: { control: 'boolean' },
  },
  args: { tabClick: fn() },
};

export default meta;
type Story = StoryObj<PillTabButtonComponent>;

export const PerformanceActive: Story = {
  args: {
    label: 'Performance',
    active: true,
  },
};

export const CareerInactive: Story = {
  args: {
    label: 'Career',
    active: false,
  },
};

export const AssetsInactive: Story = {
  args: {
    label: 'Assets',
    active: false,
  },
};
