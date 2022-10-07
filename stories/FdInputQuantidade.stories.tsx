import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FdInputQuantidade, FdInputQuantidadeProps } from '../src'

export default { 
  title: 'Componentes/FdInputQuantidade',
  component: FdInputQuantidade
} as ComponentMeta<typeof FdInputQuantidade>

const Template: ComponentStory<typeof FdInputQuantidade> = (args) => <FdInputQuantidade {...args}/>

export const Padrao = Template.bind({})

Padrao.args ={
  label: 'Quantidade',
  minValue: 0,
  maxValue: 5
} as FdInputQuantidadeProps

