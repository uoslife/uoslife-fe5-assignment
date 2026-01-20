import { useEffect, useMemo, useState } from 'react'
import './RankingScreen.css'
import type { Level } from '../types'

type RankingItem = {
    playedAtIso: string
    level: Level
    playTimeMs: number
}

const compareRanking = (a: RankingItem, b: RankingItem) => {
    if (b.level !== a.level) return b.level - a.level
    return a.playTimeMs - b.playTimeMs
}

const RANKING_KEY = 'ranking'

function formatTimestamp(iso: string) {
    const d = new Date(iso)
    if (Number.isNaN(d.getTime()))
        return iso

    return d.toLocaleString()
}

function pad2(n: number) {
    return n.toString().padStart(2, '0')
}

function formatPlayTime(ms: number) {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    const centiseconds = Math.floor((ms % 1000) / 10)

    return `${pad2(minutes)}:${pad2(seconds)}.${pad2(centiseconds)}`
}

function safeLoadRanking(): RankingItem[] {
    try {
        const raw = localStorage.getItem(RANKING_KEY)
        if (!raw)
            return []

        const parsed = JSON.parse(raw)
        if (!Array.isArray(parsed))
            return []

        return parsed.filter((x) =>
            x &&
            typeof x.playedAtIso === 'string' &&
            (x.level === 1 || x.level === 2 || x.level === 3) &&
            typeof x.playTimeMs === 'number'
        )
    }
    catch {
        return []
    }
}

function RankingScreen() {
    const [items, setItems] = useState<RankingItem[]>([])

    useEffect(() => {
        setItems(safeLoadRanking())
    }, [])

    const rows = useMemo(() => {
        return [...items].sort(compareRanking)
    }, [items])

    const handleReset = () => {
        try {
            localStorage.removeItem(RANKING_KEY)
        }
        catch {
        }
        setItems([])
    }

    return (
        <div className="ranking-screen">
            <div className="ranking-header">
                <h2 className="ranking-title">랭킹</h2>
                <button type="button" className="ranking-reset" onClick={handleReset}>
                    초기화
                </button>
            </div>

            <div className="ranking-table-wrap">
                <table className="ranking-table">
                    <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>Level</th>
                            <th>Play time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.length === 0 ? (
                            <tr>
                                <td className="ranking-empty" colSpan={3}>
                                    기록이 없습니다.
                                </td>
                            </tr>
                        ) : (
                            rows.map((item, idx) => (
                                <tr key={`${item.playedAtIso}-${idx}`}>
                                    <td>{formatTimestamp(item.playedAtIso)}</td>
                                    <td>{item.level}</td>
                                    <td>{formatPlayTime(item.playTimeMs)}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RankingScreen