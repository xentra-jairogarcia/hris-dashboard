import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { FilterSortButtonComponent } from './filter-sort-button.component';

const meta: Meta<FilterSortButtonComponent> = {
  title: 'Shared/FilterSortButton',
  component: FilterSortButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled'],
    },
    label: { control: 'text' },
  },
  args: { clicked: fn() },
};

export default meta;
type Story = StoryObj<FilterSortButtonComponent>;

export const FilterOutline: Story = {
  args: {
    label: 'Filter',
    variant: 'outline',
  },
};

export const SortFilled: Story = {
  args: {
    label: 'Sort',
    variant: 'filled',
  },
};

export const FilterFilled: Story = {
  args: {
    label: 'Filter',
    variant: 'filled',
  },
};

export const SortOutline: Story = {
  args: {
    label: 'Sort',
    variant: 'outline',
  },
};
