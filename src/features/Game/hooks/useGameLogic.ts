import { useEffect, useMemo, useState } from 'react';
import { CARD_COUNTS } from '../utils/options';
import { getGridSize, shuffle } from '../utils/gameUtils';

export interface UseGameLogicState {
    columns: number;
    cardSize: string;
    nextNumber: number;
    errorMsg: string;
    displayNumbers: (number | null)[];
    initialVisibleMax: number;
    handleClickByIndex: (index: number) => void;
}

export function useGameLogic(level: string): UseGameLogicState {
    const cardCount = CARD_COUNTS[level as keyof typeof CARD_COUNTS];
    const columns = getGridSize(cardCount);
    const totalToClick = useMemo(() => (columns === 3 ? 18 : columns === 4 ? 32 : 50), [columns]);
    const initialVisibleMax = useMemo(() => Math.floor(totalToClick / 2), [totalToClick]);

    const [nextNumber, setNextNumber] = useState<number>(1);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [displayNumbers, setDisplayNumbers] = useState<(number | null)[]>([]);
    const [shownNumbers, setShownNumbers] = useState<Set<number>>(new Set());

    useEffect(() => {
        const pool = shuffle(Array.from({ length: initialVisibleMax }, (_, i) => i + 1));
        const initial = pool.slice(0, cardCount);
        setDisplayNumbers(initial);
        setShownNumbers(new Set(initial));
        setNextNumber(1);
        setErrorMsg("");
    }, [cardCount, initialVisibleMax]);

    const getRandomReplacement = (currentShown: Set<number>): number | null => {
        const candidates: number[] = [];
        for (let n = initialVisibleMax + 1; n <= totalToClick; n++) {
            if (!currentShown.has(n)) candidates.push(n);
        }
        if (candidates.length === 0) return null;
        const s = shuffle(candidates);
        return s[0];
    };

    const handleClick = (value: number, index: number) => {
        if (value !== nextNumber) {
            setErrorMsg(`잘못 눌렀어요! ${nextNumber}을(를) 눌러야 해요.`);
            window.setTimeout(() => setErrorMsg(""), 800);
            return;
        }

        const newNext = nextNumber + 1;
        setNextNumber(newNext);

        if (value > initialVisibleMax) {
            const nextShown = new Set(shownNumbers);
            nextShown.add(value);
            setShownNumbers(nextShown);
            window.setTimeout(() => {
                setDisplayNumbers((prev) => {
                    const arr = [...prev];
                    arr[index] = null;
                    return arr;
                });
            }, 120);
            return;
        }

        setDisplayNumbers((prev) => {
            const arr = [...prev];
            return arr;
        });

        window.setTimeout(() => {
            setDisplayNumbers((prev) => {
                const arr = [...prev];
                const nextShown = new Set(shownNumbers);
                nextShown.add(value);
                const replacement = getRandomReplacement(nextShown);
                if (replacement != null) {
                    arr[index] = replacement;
                    nextShown.add(replacement);
                } else {
                    arr[index] = value;
                }
                setShownNumbers(nextShown);
                return arr;
            });
        }, 120);
    };

    const handleClickByIndex = (index: number) => {
        const value = displayNumbers[index];
        if (value == null) return;
        handleClick(value, index);
    };

    const cardSize = columns === 3 ? '6rem' : columns === 4 ? '5.5rem' : '5rem';

    return {
        columns,
        cardSize,
        nextNumber,
        errorMsg,
        displayNumbers,
        initialVisibleMax,
        handleClickByIndex,
    };
}
