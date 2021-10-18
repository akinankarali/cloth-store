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


Default.args = {
    title: 'A Nice Dress',
    description: 'This dress made by cotton and beautiful',
    currency: '€',
    price: 99.99,
    score: 3.9,
    category: 'clothes',
    isInCart: false,
    img: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80'
}