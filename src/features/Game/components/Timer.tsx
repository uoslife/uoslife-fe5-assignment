import styled from '@emotion/styled';
import { useTimer } from '../hooks/useTimer';

interface TimerProps {
    nextNumber: number;
    cardsRemaining: number;
}

const Time = styled.div`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.md};
`;

export default function Timer({ nextNumber, cardsRemaining }: TimerProps) {
    const time = useTimer(nextNumber, cardsRemaining);
    const totalMs = time * 10;
    const sec = Math.floor(totalMs / 1000);
    const ms = Math.floor((totalMs % 1000) / 10);

    return(
        <Time>
            {sec}.{ms.toString().padStart(2, '0')}
        </Time>
    );
}