import { createPortal } from 'react-dom'
import './GameResultModal.css'
import type { Level } from '../types'

type GameResult = {
    playedAtIso: string
    level: Level
    playTimeMs: number
}

type GameResultModalProps = {
    open: boolean
    result: GameResult | null
    onRetry: () => void
}

function formatKST(iso: string) {
    return new Intl.DateTimeFormat('ko-KR', {
        timeZone: 'Asia/Seoul',
        dateStyle: 'medium',
        timeStyle: 'medium',
    }).format(new Date(iso))
}

function formatMs(ms: number) {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    const centi = Math.floor((ms % 1000) / 10)
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centi).padStart(2, '0')}`
}

function GameResultModal({ open, result, onRetry }: GameResultModalProps) {
    if (!open || !result) return null

    return createPortal(
        <div className="grm-backdrop" role="presentation">
        <div className="grm-modal" role="dialog" aria-modal="true" aria-label="게임 결과">
            <div className="grm-title">오호 좀 하시는데요! 🤔</div>

            <div className="grm-info">
            <div className="grm-row">
                <span className="grm-label">현재 시각</span>
                <span className="grm-value">{formatKST(result.playedAtIso)}</span>
            </div>
            <div className="grm-row">
                <span className="grm-label">레벨</span>
                <span className="grm-value">{result.level}</span>
            </div>
            <div className="grm-row">
                <span className="grm-label">플레이 시간</span>
                <span className="grm-value">{formatMs(result.playTimeMs)}</span>
            </div>
            </div>

            <button type="button" className="grm-retry" onClick={onRetry}>
            다시 해볼래요 🙋‍♂️
            </button>
        </div>
        </div>,
        document.body
    )
}

export default GameResultModal
