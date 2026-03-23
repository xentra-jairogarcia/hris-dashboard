import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { TextLinkButtonComponent } from './text-link-button.component';

const meta: Meta<TextLinkButtonComponent> = {
  title: 'Shared/TextLinkButton',
  component: TextLinkButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
  args: { clicked: fn() },
};

export default meta;
type Story = StoryObj<TextLinkButtonComponent>;

export const MarkAllAsRead: Story = {
  args: {
    label: 'Mark all as read',
  },
};

export const ViewProfile: Story = {
  args: {
    label: 'View Profile',
  },
};

export const MarkAsRead: Story = {
  args: {
    label: 'Mark as read',
  },
};
