import { useEffect, useState } from 'react'
import './GameScreen.css'
import type { Level } from '../types'
import GameResultModal from './GameResultModal'

type GameScreenProps = {
    level: Level
    onGameStart: () => void
    onGameEnd: () => void
    onExitToHome: () => void 
}

type RankingItem = {
    playedAtIso: string
    level: Level
    playTimeMs: number
}

const RANKING_KEY = 'ranking'

function shuffle(array: number[]) {
    return [...array].sort(() => Math.random() - 0.5)
}

function GameScreen({ level, onGameStart, onGameEnd, onExitToHome }: GameScreenProps) {
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

    const [startedAtMs, setStartedAtMs] = useState<number | null>(null)
    const [resultOpen, setResultOpen] = useState(false)
    const [result, setResult] = useState<RankingItem | null>(null)

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

        setStartedAtMs(null)
        setResultOpen(false)
        setResult(null)
    }, [level, cellCount, maxNumber])

    const flashWrong = (index: number) => {
        setFlash({ index, type: 'wrong' })
        window.setTimeout(() => setFlash(null), 120)
    }

    const saveRankingItem = (item: RankingItem) => {
        try {
        const raw = localStorage.getItem(RANKING_KEY)
        const prev: RankingItem[] = raw ? JSON.parse(raw) : []
        const next = [item, ...prev]
        localStorage.setItem(RANKING_KEY, JSON.stringify(next))
        }
        catch {
        }
    }

    const finishGame = () => {
        onGameEnd()

        const nowIso = new Date().toISOString()
        const playTimeMs = startedAtMs ? Date.now() - startedAtMs : 0

        const item: RankingItem = {
        playedAtIso: nowIso,
        level,
        playTimeMs,
        }

        saveRankingItem(item)
        setResult(item)
        setResultOpen(true)
    }

    const handleRetry = () => {
        setResultOpen(false)
        onExitToHome()
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
            setStartedAtMs(Date.now())
        }

        if (value === maxNumber) {
            finishGame()
            return
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
                다음 숫자{' '}
                <span className="mission-quote">"</span>
                <span className="mission-number">{nextNumber}</span>
                <span className="mission-quote">"</span>
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
            <GameResultModal open={resultOpen} result={result} onRetry={handleRetry} />
        </div>
    )
}

export default GameScreen