// userContext.ts
import React from 'react';

interface GameData {
  time: string;
  level: string;
  score: number;
}

// 여러 데이터를 담을 객체를 초기값으로 설정
const UserContext = React.createContext<{
    mode: number;
    setMode: React.Dispatch<React.SetStateAction<number>>;
    level: string;
    setLevel: React.Dispatch<React.SetStateAction<string>>;
    result: GameData[];
    setResults: React.Dispatch<React.SetStateAction<GameData[]>>;
}>({
    mode: 0,
    setMode: () => {},
    level:'Lv1',
    setLevel: () =>{},
    result: [],
    setResults: () =>{},
});

export default UserContext;