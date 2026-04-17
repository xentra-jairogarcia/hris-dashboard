import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { TabButtonComponent } from './tab-button.component';

const meta: Meta<TabButtonComponent> = {
  title: 'Shared/TabButton',
  component: TabButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    active: { control: 'boolean' },
    variant: { control: 'select', options: ['underline', 'pill'] },
  },
  args: { tabClick: fn() },
};

export default meta;
type Story = StoryObj<TabButtonComponent>;

// Underline variant
export const UnderlineActive: Story = {
  args: {
    label: 'Personal Information',
    active: true,
    variant: 'underline',
  },
};

export const UnderlineInactive: Story = {
  args: {
    label: 'Employment Details',
    active: false,
    variant: 'underline',
  },
};

// Pill variant
export const PillActive: Story = {
  args: {
    label: 'Performance',
    active: true,
    variant: 'pill',
  },
};

export const PillInactive: Story = {
  args: {
    label: 'Career',
    active: false,
    variant: 'pill',
  },
};
