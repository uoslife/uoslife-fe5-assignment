import React, { useState } from "react";
import App from "../App";
import UserContext from "./userContext";
import GlobalStyles from "../globalStyle";

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
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
}

const ContextProvider: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [mode, setMode] = useState<number>(0);
  const [level, setLevel] = useState<string>("Lv1");
  const [result, setResults] = useState<GameData[]>(
    JSON.parse(localStorage.getItem("gameResults") || "[]")
  );

  const contextValue: ContextValue = {
    mode,
    setMode,
    level,
    setLevel,
    result,
    setResults,
    seconds,
    setSeconds,
  };

  return (
    <UserContext.Provider value={contextValue}>
      <App />
      <GlobalStyles />
      <div id="modal-root" />
    </UserContext.Provider>
  );
};

export default ContextProvider;
