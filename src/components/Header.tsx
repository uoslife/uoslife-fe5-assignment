import './Header.css'
import type { Tab, Level } from '../types'

type HeaderProps = {
    activeTab: Tab
    onChangeTab: (tab: Tab) => void
    level: Level
    onChangeLevel: (level: Level) => void
    timeMs: number
}

function Header({
    activeTab,
    onChangeTab,
    level,
    onChangeLevel,
    timeMs,
}: HeaderProps) {
    const seconds = (timeMs / 1000).toFixed(2)

    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-left">
                    <h1 className="logo">1 to 50</h1>

                    <nav className="nav">
                        <button
                            type="button"
                            className={`nav-item ${activeTab === 'game' ? 'active' : ''}`}
                            onClick={() => onChangeTab('game')}
                        >게임🕹️</button>
                        <button
                            type="button"
                            className={`nav-item ${activeTab === 'ranking' ? 'active' : ''}`}
                            onClick={() => onChangeTab('ranking')}
                        >랭킹🏆</button>
                    </nav>
                </div>

                {activeTab === 'game' && (
                    <div className="header-right">
                        <select
                            value={level}
                            onChange={(e) => onChangeLevel(Number(e.target.value) as Level)}
                        >
                            <option value={1}>Level 1</option>
                            <option value={2}>Level 2</option>
                            <option value={3}>Level 3</option>
                        </select>

                        <div className="timer">{seconds}초</div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header