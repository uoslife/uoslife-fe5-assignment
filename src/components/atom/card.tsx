import styled from '@emotion/styled';
import { memo } from 'react';

interface CardProps {
    number: number;
    hidden?: boolean;
    error?: boolean;
    size?: string;
    active?: boolean;
    secondHalf?: boolean;
}

const CardContainer = styled.div<{ hiddenMode: boolean; error: boolean; size: string; active: boolean; secondHalf: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    background-color: ${({ active, secondHalf, theme }) => (active || secondHalf ? theme.colors.button : theme.colors.card)};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    cursor: pointer;
    user-select: none;
    border: 2px solid transparent;
    transition: transform 100ms ease, background-color 150ms ease;

    ${({ hiddenMode }) => hiddenMode ? 'filter: brightness(0.7);' : ''}
    ${({ error }) => error ? 'border-color: #ef4444;' : ''}

    &:hover {
        background-color: ${({ theme }) => theme.colors.button};
    }

    &:active {
        transform: scale(0.96);
    }
`;

function CardComponent({ number, hidden = false, error = false, size = '6rem', active = false, secondHalf = false }: CardProps) {
    return (
        <CardContainer hiddenMode={hidden} error={error} size={size} active={active} secondHalf={secondHalf}>
            {hidden ? '?' : number}
        </CardContainer>
    );
}

export default memo(CardComponent);