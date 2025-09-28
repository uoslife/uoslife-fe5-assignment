import React, { useState } from 'react';
import App from './App';
import UserContext from './userContext';

interface GameData {
  time: string;
  level: string;
  score: number;
}

// 1. ContextValue 인터페이스에 필요한 속성들을 추가합니다.
interface ContextValue {
  mode: number;
  setMode: React.Dispatch<React.SetStateAction<number>>;
  level: string;
  setLevel: React.Dispatch<React.SetStateAction<string>>;
  result: GameData[];
  setResults: React.Dispatch<React.SetStateAction<GameData[]>>;
}

const AppWrapper: React.FC = () => {
  const [mode, setMode] = useState<number>(0);
  const [level, setLevel] = useState<string>("Lv1");
  const [result, setResults] = useState<GameData[]>([]);

  const contextValue: ContextValue = {
    mode,
    setMode,
    level,
    setLevel,
    result, 
    setResults
  };

  return (
    <UserContext.Provider value={contextValue}>
      <App />
      <div id="modal-root"></div>
    </UserContext.Provider>
  );
};

export default AppWrapper;