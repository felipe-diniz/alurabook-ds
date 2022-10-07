//src/components/Card/index.tsx
import React, { ReactNode } from "react"
import styled from "styled-components";

export interface FdCardProps {
    children: ReactNode
}

const CardStyled = styled.div`
    padding: 48px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`

export const FdCard = ({ children }: FdCardProps) => {
    return (
        <CardStyled>
            {children}
        </CardStyled>
    )
}