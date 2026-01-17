import { useEffect, useState } from 'react'
import './GameScreen.css'
import type { Level } from '../types'

type GameScreenProps = {
    level: Level
}

function shuffle(array: number[]) {
    return [...array].sort(() => Math.random() - 0.5)
}

function GameScreen({ level }: GameScreenProps) {
    const sizeMap: Record<Level, number> = {
        1: 3,
        2: 4,
        3: 5,
    }
    const maxNumberMap: Record<Level, number> = {
        1: 18,
        2: 32,
        3: 50
    }

    const size = sizeMap[level]
    const cellCount = size * size
    const maxNumber = maxNumberMap[level]

    const [nextNumber, setNextNumber] = useState<number>(1)
    const [cells, setCells] = useState<number[]>([])
    const [pool, setPool] = useState<number[]>([])

    useEffect(() => {
        const cellNumbers = Array.from({ length: cellCount }, (_, i) => i + 1)

        const poolNumbers = Array.from(
        { length: maxNumber - cellCount },
        (_, i) => i + cellCount + 1
        )

        setCells(shuffle(cellNumbers))
        setPool(poolNumbers)
        setNextNumber(1)
    }, [level, cellCount, maxNumber])

    return (
        <div className="game-screen">
            <div className="mission">
                다음 숫자 <span className="mission-number">{nextNumber}</span>
            </div>

            <div className="debug">
                pool: {pool.join(', ')}
            </div>
            <div
                className="board"
                style={{ gridTemplateColumns: `repeat(${size}, 80px)` }}
            >
                {cells.map((value, index) => (
                    <div key={index} className="cell">
                        {value}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GameScreen