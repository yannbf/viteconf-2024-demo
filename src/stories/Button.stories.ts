import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn } from '@storybook/test'

import { Button } from './Button'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn(), label: 'Button' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const FailingStory: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByRole('button')
    await expect(button).toBeDisabled()
    // TODO: Remove or comment this check below for this test to pass
    await expect(button).toHaveTextContent(
      'I am failing on purpose. Check the button stories to fix the test!'
    )
  },
}

export const Primary: Story = {
  args: {
    primary: true,
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}
