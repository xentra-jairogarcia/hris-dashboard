import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { IconButtonComponent } from './icon-button.component';

const meta: Meta<IconButtonComponent> = {
  title: 'Shared/IconButton',
  component: IconButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: ['back'],
    },
    title: { control: 'text' },
  },
  args: { clicked: fn() },
};

export default meta;
type Story = StoryObj<IconButtonComponent>;

export const BackButton: Story = {
  args: {
    icon: 'back',
    title: 'Go Back',
  },
};
