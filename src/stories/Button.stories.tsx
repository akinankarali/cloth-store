import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, Props } from '../components/Button'
import { action } from '@storybook/addon-actions'

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default'
    }
  }
}

export default meta

const Templete: Story<Props> = (args) => <Button {...args} />

export const Default = Templete.bind({})

export const Secondary = Templete.bind({})

Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
  onClick: action('secondary button clicked')
}
