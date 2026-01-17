import { useEffect, useState } from 'react'
import './GameScreen.css'
import type { Level } from '../types'

type GameScreenProps = {
    level: Level
}

function GameScreen({ level }: GameScreenProps) {
    const sizeMap: Record<Level, number> = {
        1: 3,
        2: 4,
        3: 5,
    }

    const size = sizeMap[level]
    const cellCount = size * size

    const [nextNumber, setNextNumber] = useState<number>(1)

    useEffect(() => {
        setNextNumber(1)
    }, [level])

    return (
        <div className="game-screen">
            <div className="mission">
                다음 숫자 <span className="mission-number">{nextNumber}</span>
            </div>
            <div
                className="board"
                style={{ gridTemplateColumns: `repeat(${size}, 80px)` }}
            >
                {Array.from({ length: cellCount }).map((_, index) => (
                <div key={index} className="cell">
                    {index + 1}
                </div>
                ))}
            </div>
        </div>
    )
}

export default GameScreen