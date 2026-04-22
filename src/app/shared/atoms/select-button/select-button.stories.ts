import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { SelectButtonComponent } from './select-button.component';

const meta: Meta<SelectButtonComponent> = {
  title: 'Atoms/SelectButton',
  component: SelectButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['filled', 'outline'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    valueChange: fn(),
    variant: 'outline',
    size: 'medium',
    placeholder: 'Select…',
    value: '6m',
    options: [
      { label: 'Last 3 Months',  value: '3m' },
      { label: 'Last 6 Months',  value: '6m' },
      { label: 'Last 12 Months', value: '12m' },
    ],
  },
};

export default meta;
type Story = StoryObj<SelectButtonComponent>;

export const Playground: Story = {};

export const Filled: Story = {
  args: { variant: 'filled' },
};

export const Outline: Story = {
  args: { variant: 'outline' },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <div style="display:grid;gap:16px;">
        <div style="display:flex;gap:12px;align-items:center;">
          <app-select-button
            variant="filled"
            size="medium"
            [options]="periodOptions"
            value="6m">
          </app-select-button>
          <app-select-button
            variant="outline"
            size="medium"
            [options]="subsidiaryOptions"
            value="all">
          </app-select-button>
        </div>
        <div style="display:flex;gap:12px;align-items:center;">
          <app-select-button variant="outline" size="small"  [options]="periodOptions" value="3m"></app-select-button>
          <app-select-button variant="outline" size="medium" [options]="periodOptions" value="6m"></app-select-button>
          <app-select-button variant="outline" size="large"  [options]="periodOptions" value="12m"></app-select-button>
        </div>
      </div>
    `,
    props: {
      periodOptions: [
        { label: 'Last 3 Months',  value: '3m' },
        { label: 'Last 6 Months',  value: '6m' },
        { label: 'Last 12 Months', value: '12m' },
      ],
      subsidiaryOptions: [
        { label: 'All Subsidiaries', value: 'all' },
        { label: 'Xentra PH',        value: 'xph' },
        { label: 'Xentra US',        value: 'xus' },
      ],
    },
  }),
};
