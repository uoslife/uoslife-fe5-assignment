/* eslint-disable react-refresh/only-export-components */
import { useMemo, useState, createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { LEVEL_OPTIONS } from '../features/Game/utils/options';

interface LevelContextValue {
    level: string;
    setLevel: (next: string) => void;
}

export const LevelContext = createContext<LevelContextValue | undefined>(undefined);

interface LevelProviderProps {
    children: ReactNode;
}

export function LevelProvider({ children }: LevelProviderProps) {
    const [level, setLevel] = useState<string>(LEVEL_OPTIONS[0]);
    const value = useMemo(() => ({ level, setLevel }), [level]);
    return <LevelContext.Provider value={value}>{children}</LevelContext.Provider>;
}

export function useLevel(): LevelContextValue {
    const ctx = useContext(LevelContext);
    if (!ctx) throw new Error('useLevel must be used within LevelProvider');
    return ctx;
}