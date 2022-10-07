import React from 'react';
import styled, { css } from 'styled-components';

export interface FdBotaoProps {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

const BotaoEstilizado = styled.button<FdBotaoProps>`
  background: ${(props: FdBotaoProps) =>
    props.tipo === 'primario' ? '#EB9B00' : '#FFF'};
  padding: 16px 32px;
  border: 2px solid #EB9B00;
  color: ${(props: FdBotaoProps) =>
    props.tipo === 'primario' ? '#FFF' : '#EB9B00'};
  font-size: 20px;
  cursor: pointer;
  ${(props: FdBotaoProps) =>
    props.tipo === 'primario'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `}
`;

export const FdBotao = ({
  texto,
  tipo = 'primario',
  onClick,
}: FdBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  );
};
