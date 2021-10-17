import React from 'react';
import { Meta, Story  } from '@storybook/react';
import { Card, Props } from '../components/Card';

const meta: Meta = {
  title: 'Card',
  component: Card,
}

export default meta;

const Templete: Story<Props> = (args) => <Card {...args}/>

export const Default = Templete.bind({})