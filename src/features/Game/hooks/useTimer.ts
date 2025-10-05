import { useEffect, useState } from 'react';

export function useTimer(nextNumber: number, cardsRemaining: number) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (nextNumber === 2 && !isRunning) {
            setIsRunning(true);
        }
        if (cardsRemaining === 0 && isRunning) {
            setIsRunning(false);
        }
    }, [nextNumber, cardsRemaining, isRunning]);

    useEffect(() => {
        let id: number | undefined;
        if (isRunning) {
            id = setInterval(() => {
                setTime((t) => t + 1);
            }, 10);
        }

        return () => {
            if (id) {
                clearInterval(id as number);
            }
        };
    }, [isRunning]);

    return (time);
}