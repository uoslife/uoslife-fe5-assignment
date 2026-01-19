import { useEffect, useState } from 'react'
import './GameScreen.css'
import type { Level } from '../types'

type GameScreenProps = {
    level: Level
    onGameStart: () => void
}

function shuffle(array: number[]) {
    return [...array].sort(() => Math.random() - 0.5)
}

function GameScreen({ level, onGameStart }: GameScreenProps) {
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
    const [cells, setCells] = useState<(number | null)[]>([])
    const [pool, setPool] = useState<number[]>([])

    const [correctFlags, setCorrectFlags] = useState<boolean[]>([])
    const [flash, setFlash] = useState<{ index: number; type: 'correct' | 'wrong' } | null>(null)

    useEffect(() => {
        const cellNumbers = Array.from({ length: cellCount }, (_, i) => i + 1)

        const poolNumbers = Array.from(
        { length: maxNumber - cellCount },
        (_, i) => i + cellCount + 1
        )

        setCells(shuffle(cellNumbers))
        setPool(poolNumbers)
        setNextNumber(1)
        setCorrectFlags(Array(cellCount).fill(false))
        setFlash(null)
    }, [level, cellCount, maxNumber])

    const flashWrong = (index: number) => {
        setFlash({ index, type: 'wrong' })
        window.setTimeout(() => setFlash(null), 120)
    }

    const handleCellClick = (index: number) => {
        const value = cells[index]
        if(value == null) return

        if(value !== nextNumber){
            flashWrong(index)
            return
        }

        if(nextNumber === 1){
            onGameStart()
        }

        setCorrectFlags((prev) => {
            const next = [...prev]
            next[index] = true
            return next
        })

        setNextNumber((prev) => prev + 1)
        
        if(nextNumber <= cellCount){
            if(pool.length === 0) return

            const nextValue = pool[0]
            const nextPool = pool.slice(1)

            setCells((prevCells) => {
                const nextCells = [...prevCells]
                nextCells[index] = nextValue
                return nextCells
            })
            setPool(nextPool)
            return
        }

        setCells((prevCells) => {
            const nextCells = [...prevCells]
            nextCells[index] = null
            return nextCells
        })

        setCorrectFlags((prev) => {
            const next = [...prev]
            next[index] = false
            return next
        })
    }

    return (
        <div className="game-screen">
            <div className="mission">
                다음 숫자 <span className="mission-number">{nextNumber}</span>
            </div>

            <div
                className="board"
                style={{ gridTemplateColumns: `repeat(${size}, 80px)` }}
            >
                {cells.map((value, index) => {
                    const isCorrect = correctFlags[index]
                    const isWrongFlash = flash?.index === index

                    const className = [
                        'cell',
                        isCorrect ? 'cell-correct' : '',
                        isWrongFlash ? 'cell-wrong' : '',
                        value == null ? 'cell-empty' : '',
                    ]
                        .filter(Boolean)
                        .join(' ')
                    
                    return (
                        <button
                            key={index}
                            type="button"
                            className={className}
                            onClick={() => handleCellClick(index)}
                            disabled={value == null}
                        >
                            {value ?? ''}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default GameScreen