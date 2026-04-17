import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';

const meta: Meta<IconComponent> = {
  title: 'Atoms/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['plus', 'star', 'save', 'profile', 'eye', 'back'],
    },
    size: { control: { type: 'number', min: 8, max: 64, step: 2 } },
  },
  args: { name: 'plus', size: 24 },
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Playground: Story = {};

export const AllIcons: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:24px;align-items:center;">
        <app-icon name="plus"    [size]="24"></app-icon>
        <app-icon name="star"    [size]="24"></app-icon>
        <app-icon name="save"    [size]="24"></app-icon>
        <app-icon name="profile" [size]="24"></app-icon>
        <app-icon name="eye"     [size]="24"></app-icon>
        <app-icon name="back"    [size]="24"></app-icon>
      </div>
    `,
  }),
};
