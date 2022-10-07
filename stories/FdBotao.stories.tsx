import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FdBotao, FdBotaoProps } from '../src'

export default { 
  title: 'Componentes/FdBotao',
  component: FdBotao
} as ComponentMeta<typeof FdBotao>

const Template: ComponentStory<typeof FdBotao> = (args) => <FdBotao {...args}/>

export const Primario = Template.bind({})

Primario.args ={
 texto: 'FdBotao Primário',
 tipo: 'primario'
} as FdBotaoProps

export const Secundario = Template.bind({})

Secundario.args ={
  texto: 'FdBotao Secundário',
  tipo: 'secundario'
 } as FdBotaoProps