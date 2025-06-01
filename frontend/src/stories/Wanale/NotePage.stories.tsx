import type { Meta, StoryObj } from '@storybook/react';

import NotePage from './NotePage.js';

const meta = {
  component: NotePage,
} satisfies Meta<typeof NotePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};