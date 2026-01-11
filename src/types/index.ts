export type CellData = {
  id: number;
  value: number | null;
  backValue: number | null;
  isFront: boolean;
};

export type GameState = {
  gridSize: number;
  targetNumber: number;
  boardNumbers: CellData[];
  startTime: number | null;
  endTime: number | null;
  errorCellId: number | null;
};

export type GameAction = { type: string; payload?: any };

export type RankRecord = {
  timestamp: string;
  level: number;
  duration: number;
};

export type TabType = 'GAME' | 'RANKING';
