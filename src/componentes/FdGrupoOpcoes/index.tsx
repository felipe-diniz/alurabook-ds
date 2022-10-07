import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section<{ selecionado: boolean }>`
  background: ${props =>
    props.selecionado
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#ffffff'};
  border: 1px solid;
  border-color: ${props => (props.selecionado ? '#002F52' : '#eb9b00')};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  height: 88px;
  justify-content: space-around;
  margin: 10px;
  text-align: center;
  width: 194px;
  header {
    color: ${props => (props.selecionado ? '#ffffff' : '#eb9b00')};
    font-size: 12px;
    font-weight: 400;
  }
  strong {
    color: ${props => (props.selecionado ? '#ffffff' : '#eb9b00')};
    font-size: 16px;
    font-weight: 700;
  }
  footer {
    color: ${props => (props.selecionado ? '#ffffff' : 'rgba(0, 0, 0, 0.54)')};
    font-size: 12px;
    font-weight: 400;
  }
`;

export interface FdGrupoOpcao {
  id: number;
  titulo: string;
  corpo: string;
  rodape: string;
}

export interface FdGrupoOpcoesProps {
  opcoes: FdGrupoOpcao[];
  valorPadrao?: FdGrupoOpcao | null;
  onChange?: (opcao: FdGrupoOpcao) => void;
}

export const FdGrupoOpcoes = ({ opcoes, onChange, valorPadrao }: FdGrupoOpcoesProps) => {
  const [selecao, setSelecao] = useState<FdGrupoOpcao | null>(valorPadrao ?? null);
  const aoSelecionar = (opcao: FdGrupoOpcao): void => {
    setSelecao(opcao);
    if (onChange) {
      onChange(opcao)
    }
  };
  return (
    <>
      {opcoes.map(opcao => (
        <StyledSection
          onClick={() => aoSelecionar(opcao)}
          key={opcao.id}
          selecionado={selecao?.id === opcao.id}
        >
          <header>{opcao.titulo}</header>
          <div>
            <strong>{opcao.corpo}</strong>
          </div>
          <footer>{opcao.rodape}</footer>
        </StyledSection>
      ))}
    </>
  );
};
