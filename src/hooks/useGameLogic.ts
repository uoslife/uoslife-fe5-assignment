import { useCallback, useEffect, useReducer } from 'react';
import {
  CLEAR_ERROR,
  CLICK_NUMBER,
  INIT_GAME,
  initialState,
  reducer,
} from './gameReducer';

export function useGameLogic() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.errorCellId !== null) {
      const timer = setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [state.errorCellId]);

  useEffect(() => {
    if (state.startTime && state.endTime) {
      const duration = (state.endTime - state.startTime) / 1000;

      const newRecord = {
        timestamp: new Date().toISOString(),
        level: state.gridSize - 2,
        duration: duration,
      };

      const saved = localStorage.getItem('ranks');
      const parsed = saved ? JSON.parse(saved) : [];

      localStorage.setItem('ranks', JSON.stringify([...parsed, newRecord]));
    }
  }, [state.endTime, state.startTime, state.gridSize]);

  const changeLevel = useCallback((level: number) => {
    dispatch({ type: INIT_GAME, payload: level });
  }, []);

  const clickNumber = useCallback((id: number, value: number) => {
    dispatch({ type: CLICK_NUMBER, payload: { id, value } });
  }, []);

  const resetGame = useCallback(
    () => dispatch({ type: INIT_GAME, payload: 3 }),
    []
  );

  return { state, changeLevel, clickNumber, resetGame };
}
