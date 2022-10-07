import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FdGrupoOpcoes, FdGrupoOpcoesProps } from '../src';

export default {
  title: 'Componentes/FdGrupoOpcoes',
  component: FdGrupoOpcoes,
} as ComponentMeta<typeof FdGrupoOpcoes>;

const Template: ComponentStory<typeof FdGrupoOpcoes> = args => (
  <FdGrupoOpcoes {...args} />
);

export const Padrao = Template.bind({});

Padrao.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      titulo: 'Impresso + E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob',
    }
  ]
} as FdGrupoOpcoesProps;
