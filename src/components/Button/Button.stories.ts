import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'

import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Click me',
  },
};
