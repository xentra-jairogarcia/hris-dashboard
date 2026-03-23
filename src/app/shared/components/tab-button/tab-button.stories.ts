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
  },
  args: { tabClick: fn() },
};

export default meta;
type Story = StoryObj<TabButtonComponent>;

export const ActiveTab: Story = {
  args: {
    label: 'Personal Information',
    active: true,
  },
};

export const InactiveTab: Story = {
  args: {
    label: 'Employment Details',
    active: false,
  },
};

export const AllTab: Story = {
  args: {
    label: 'All',
    active: true,
  },
};

export const NewRequestTab: Story = {
  args: {
    label: 'New Request',
    active: false,
  },
};

export const ApprovedTab: Story = {
  args: {
    label: 'Approved',
    active: false,
  },
};

export const RejectedTab: Story = {
  args: {
    label: 'Rejected',
    active: false,
  },
};

export const DocumentsTab: Story = {
  args: {
    label: 'Documents',
    active: false,
  },
};

export const DraftTab: Story = {
  args: {
    label: 'Draft',
    active: true,
  },
};
