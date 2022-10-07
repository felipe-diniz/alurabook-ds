import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FdCampoTexto, FdCampoTextoProps } from '../src'

export default { 
  title: 'Componentes/FdCampoTexto',
  component: FdCampoTexto
} as ComponentMeta<typeof FdCampoTexto>

const Template: ComponentStory<typeof FdCampoTexto> = (args) => <FdCampoTexto {...args}/>

export const Padrao = Template.bind({})

Padrao.args ={
label: 'E-Mail',
type: 'email',
placeholder: 'seuemail@maneiro.com.br'
} as FdCampoTextoProps