import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100px;
  text-align: center;
  display: inline-block;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLabel = styled.label`
  color: #002f52;
  display: block;
  font-weight: 700;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 8px;
`;

const StyledSpan = styled.span`
  font-size: 18px;
  line-height: 27px;
  display: inline-block;
  margin: 0 12px;
  color: #002f52;
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledBtn = styled.button`
  background: #002f52;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
  color: #fff;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export interface FdInputQuantidadeProps {
  label: string;
  maxValue: number;
  minValue: number;
  onChange?: (value:number) => void
}

export const FdInputQuantidade = ({
  label,
  maxValue,
  minValue,
  onChange
}: FdInputQuantidadeProps) => {
  const [valor, setValor] = useState<number>(minValue);
  
  useEffect(() =>{
    if (onChange) {
      onChange(Number(valor))
    }
  },[valor])

  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledFlexContainer>
        <StyledBtn
          onClick={() => setValor(valor > minValue ? valor - 1 : valor)}
        >
          -
        </StyledBtn>
        <StyledSpan>{valor}</StyledSpan>
        <StyledBtn
          onClick={() => setValor(valor < maxValue ? valor + 1 : valor)}
        >
          +
        </StyledBtn>
      </StyledFlexContainer>
    </StyledContainer>
  );
};
