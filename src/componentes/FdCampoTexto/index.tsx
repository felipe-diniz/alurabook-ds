import React from 'react';
import styled from 'styled-components';

const StyledCampo = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: #002f52;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 16px;
    margin-left: 16px;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    line-height: 24px;
    padding: 8px 24px;
    border-radius: 20px;
    border: 1px solid #002f52;
    &:focus {
      outline: none;
    }
  }
`;

export interface FdCampoTextoProps {
  label?: string;
  placeholder?: string;
  value?: string;
  type: 'text' | 'email' | 'password' | 'date';
  onChange: (value: string) => void;
}



export const FdCampoTexto = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
}: FdCampoTextoProps) => {
  let id = label
  return (
    <StyledCampo>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
      />
    </StyledCampo>
  );
};
