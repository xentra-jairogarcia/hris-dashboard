import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ActionButtonComponent } from './action-button.component';

const meta: Meta<ActionButtonComponent> = {
  title: 'Shared/ActionButton',
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
    icon: {
      control: 'select',
      options: [undefined, 'plus', 'star', 'save', 'profile'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { clicked: fn() },
};

export default meta;
type Story = StoryObj<ActionButtonComponent>;

export const NewRequest: Story = {
  args: {
    label: 'New Request',
    variant: 'primary',
    size: 'large',
    icon: 'plus',
  },
};

export const SaveChanges: Story = {
  args: {
    label: 'Save Changes',
    variant: 'primary',
    size: 'small',
    icon: 'save',
  },
};

export const Cancel: Story = {
  args: {
    label: 'Cancel',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Promote: Story = {
  args: {
    label: 'Promote',
    variant: 'blue',
    size: 'medium',
    icon: 'star',
  },
};

export const ViewProfile: Story = {
  args: {
    label: 'View Profile',
    variant: 'blue',
    size: 'medium',
    icon: 'profile',
  },
};

export const ChangePhoto: Story = {
  args: {
    label: 'Change Photo',
    variant: 'primary',
    size: 'small',
  },
};

export const PrimaryLarge: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'large',
  },
};

export const SecondaryMedium: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const OutlineSmall: Story = {
  args: {
    label: 'Button',
    variant: 'outline',
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};
