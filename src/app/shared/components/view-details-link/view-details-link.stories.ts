import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ViewDetailsLinkComponent } from './view-details-link.component';

const meta: Meta<ViewDetailsLinkComponent> = {
  title: 'Shared/ViewDetailsLink',
  component: ViewDetailsLinkComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
  args: { clicked: fn() },
};

export default meta;
type Story = StoryObj<ViewDetailsLinkComponent>;

export const Default: Story = {
  args: {
    label: 'View Details',
  },
};

export const ViewProfile: Story = {
  args: {
    label: 'View Profile',
  },
};
