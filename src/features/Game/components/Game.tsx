import styled from "@emotion/styled";
import Card from "../../../components/atom/card";
import { useGameLogic } from "../hooks/useGameLogic";

interface GameProp {
    level: string;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100%;
    gap: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.colors.button};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Board = styled.div<{ columns: number }>`
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
    gap: ${({ theme }) => theme.spacing.sm};
    width: fit-content;
`;

const ErrorText = styled.div`
    color: #ffdddd;
    background: #7f1d1d;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
`;

const Placeholder = styled.div<{ size: string }>`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
`;

export default function Game({ level }: GameProp) {
    const { columns, cardSize, nextNumber, errorMsg, displayNumbers, initialVisibleMax, handleClickByIndex } = useGameLogic(level);

    return (
        <Wrapper>
            <Title>다음 숫자 " {nextNumber} "</Title>
            {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
            <Board key={`${level}-${columns}`} columns={columns}>
                {displayNumbers.map((num, idx) => (
                    num == null ? (
                        <Placeholder key={`empty-${idx}`} size={cardSize} />
                    ) : (
                        <div key={`cell-${idx}`} onClick={() => handleClickByIndex(idx)}>
                            <Card
                                number={num}
                                size={cardSize}
                                active={num < nextNumber}
                                secondHalf={num > initialVisibleMax}
                            />
                        </div>
                    )
                ))}
            </Board>
        </Wrapper>
    );
}