import React from 'react';
import styled from 'styled-components';

export interface FdTagProps {
  texto: string
}

const StyledTag = styled.div`
  padding: 24px 32px;
    color: #FFFFFF;
    background: #EB9B00;
    font-weight: 700;
    font-size: 24px;
    display: inline-block;
    font-family: sans-serif;
`

export const FdTag = ({texto}: FdTagProps) => {
  return ( <StyledTag>{texto}</StyledTag> )
}