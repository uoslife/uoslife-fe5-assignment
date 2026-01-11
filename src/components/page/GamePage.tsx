import styled from '@emotion/styled';
import type { GameState } from '../../types';
import Flex from '../common/Flex';
import Cell from '../common/Cell';

type GamePageProps = {
  gameState: GameState;
  onClickNumber: (id: number, value: number) => void;
};

const GamePageWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  gap: ${({ theme }) => theme.spacing.m};
`;

const GameBoardWrapper = styled.div<{ gridSize: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.gridSize}, 50px);
  grid-template-rows: repeat(${(props) => props.gridSize}, 50px);
  gap: ${({ theme }) => theme.spacing.sm};
`;
export default function GamePage({ gameState, onClickNumber }: GamePageProps) {
  const { boardNumbers, gridSize, errorCellId, targetNumber } = gameState;

  return (
    <GamePageWrapper>
      {gameState.endTime !== null || <h2>다음 숫자 "{targetNumber}"</h2>}
      <GameBoardWrapper gridSize={gridSize}>
        {boardNumbers.map((cell) => (
          <Cell
            key={cell.id}
            data={cell}
            isError={errorCellId === cell.id}
            onClick={onClickNumber}
          />
        ))}
      </GameBoardWrapper>
    </GamePageWrapper>
  );
}
