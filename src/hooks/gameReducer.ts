import type { GameAction, GameState } from '../types';
import { createInitialBoard } from '../utils';

export const INIT_GAME = 'INIT_GAME';
export const CLICK_NUMBER = 'CLICK_NUMBER';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const initialState: GameState = {
  gridSize: 3,
  targetNumber: 1,
  boardNumbers: createInitialBoard(3),
  startTime: null,
  endTime: null,
  errorCellId: null,
};

export function reducer(state: GameState, action: GameAction) {
  switch (action.type) {
    case INIT_GAME: {
      const gridSize = action.payload;
      return {
        ...state,
        gridSize,
        targetNumber: 1,
        boardNumbers: createInitialBoard(gridSize),
        startTime: null,
        endTime: null,
        errorCellId: null,
      };
    }

    case CLICK_NUMBER: {
      const { id, value } = action.payload;

      if (state.endTime !== null) return state;

      if (value !== state.targetNumber) {
        return { ...state, errorCellId: id };
      }

      const nextState =
        state.startTime === null
          ? { ...state, startTime: Date.now() }
          : { ...state };

      const totalCells = state.gridSize * state.gridSize;
      const maxNumber = totalCells * 2;

      const nextBoardNumbers = state.boardNumbers.map((cell) => {
        if (cell.id !== id) return cell;

        if (cell.isFront) {
          return {
            ...cell,
            value: cell.backValue,
            isFront: false,
          };
        } else {
          return {
            ...cell,
            value: null,
            isFront: false,
          };
        }
      });

      const newBoardNumbers = [...state.boardNumbers];

      const targetCell = newBoardNumbers[id];

      if (targetCell.isFront) {
        newBoardNumbers[id] = {
          ...targetCell,
          value: targetCell.backValue,
          isFront: false,
        };
      } else {
        newBoardNumbers[id] = {
          ...targetCell,
          value: null,
          isFront: false,
        };
      }

      const nextTarget = state.targetNumber + 1;

      if (nextTarget > maxNumber) {
        return {
          ...nextState,
          boardNumbers: nextBoardNumbers,
          targetNumber: nextTarget,
          endTime: Date.now(),
        };
      }

      return {
        ...nextState,
        boardNumbers: nextBoardNumbers,
        targetNumber: nextTarget,
      };
    }

    case CLEAR_ERROR: {
      return { ...state, errorCellId: null };
    }

    default:
      return state;
  }
}
