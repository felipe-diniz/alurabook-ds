// stories/Card.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FdCard } from '../src'

export default {
  title: 'componentes/FdCard',
  component: FdCard,
} as ComponentMeta<typeof FdCard>;


const Template: ComponentStory<typeof FdCard> = (args) => <FdCard {...args}/>

export const Padrao = Template.bind({})

Padrao.args = {
  children: <h1>Olá, eu sou um card</h1>
}