import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ButtonComponent } from './button.component';
import { IconComponent } from '../icon/icon.component';

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({ imports: [IconComponent] }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'blue',
        'filter-sort-outline',
        'filter-sort-filled',
        'text-link',
        'icon-only',
      ],
    },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },
    icon: {
      control: 'select',
      options: [undefined, 'plus', 'star', 'save', 'profile', 'eye', 'back'],
    },
    iconPosition: { control: 'inline-radio', options: ['left', 'right'] },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    label: { control: 'text' },
    title: { control: 'text' },
  },
  args: {
    clicked: fn(),
    label: 'Button',
    variant: 'primary',
    size: 'medium',
    iconPosition: 'left',
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// Toggle every prop from the controls panel.
export const Playground: Story = {};

// Visual matrix of every labelled variant × size in one screen.
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <div style="display:grid;gap:16px;">
        <div style="display:flex;gap:12px;align-items:center;">
          <app-button label="Primary"   variant="primary"   size="small"></app-button>
          <app-button label="Primary"   variant="primary"   size="medium"></app-button>
          <app-button label="Primary"   variant="primary"   size="large" icon="plus"></app-button>
        </div>
        <div style="display:flex;gap:12px;align-items:center;">
          <app-button label="Secondary" variant="secondary" size="small"></app-button>
          <app-button label="Secondary" variant="secondary" size="medium"></app-button>
          <app-button label="Secondary" variant="secondary" size="large"></app-button>
        </div>
        <div style="display:flex;gap:12px;align-items:center;">
          <app-button label="Outline"   variant="outline"   size="small"></app-button>
          <app-button label="Outline"   variant="outline"   size="medium"></app-button>
          <app-button label="Outline"   variant="outline"   size="large"></app-button>
        </div>
        <div style="display:flex;gap:12px;align-items:center;">
          <app-button label="Promote"   variant="blue"      size="medium" icon="star"></app-button>
          <app-button label="Profile"   variant="blue"      size="medium" icon="profile"></app-button>
        </div>
        <div style="display:flex;gap:12px;align-items:center;">
          <app-button label="Filter"    variant="filter-sort-outline"></app-button>
          <app-button label="Sort"      variant="filter-sort-filled"></app-button>
        </div>
        <div style="display:flex;gap:12px;align-items:center;">
          <app-button label="Mark all as read" variant="text-link"></app-button>
          <app-button label="View"              variant="text-link" icon="eye"></app-button>
        </div>
        <div style="display:flex;gap:12px;align-items:center;">
          <app-button variant="icon-only" icon="back" title="Back"></app-button>
        </div>
        <div style="display:flex;gap:12px;align-items:center;">
          <app-button label="Disabled" variant="primary" [disabled]="true"></app-button>
        </div>
      </div>
    `,
  }),
};

export const IconOnly: Story = {
  args: { variant: 'icon-only', icon: 'back', label: '', title: 'Back' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
