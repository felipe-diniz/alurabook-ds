import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FdTag, FdTagProps } from '../src'

export default {
  title: 'componentes/FdTag',
  component: FdTag,
} as ComponentMeta<typeof FdTag>

const Template: ComponentStory<typeof FdTag> = (args) => <FdTag {...args}/>

export const Primario = Template.bind({})

Primario.args = {
  texto: 'FdTag'
} as FdTagProps