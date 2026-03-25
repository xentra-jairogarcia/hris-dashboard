import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { TextLinkButtonComponent } from './text-link-button.component';

const meta: Meta<TextLinkButtonComponent> = {
  title: 'Shared/TextLinkButton',
  component: TextLinkButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'select', options: [null, 'eye'] },
  },
  args: { clicked: fn() },
};

export default meta;
type Story = StoryObj<TextLinkButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Mark all as read',
    icon: null,
  },
};

export const MarkAsRead: Story = {
  args: {
    label: 'Mark as read',
    icon: null,
  },
};

export const ViewDetailsWithIcon: Story = {
  args: {
    label: 'View Details',
    icon: 'eye',
  },
};

export const ViewProfileWithIcon: Story = {
  args: {
    label: 'View Profile',
    icon: 'eye',
  },
};
