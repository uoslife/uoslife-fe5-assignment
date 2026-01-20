import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import GameScreen from './screens/GameScreen'
import RankingScreen from './screens/RankingScreen'
import type { Tab, Level } from './types'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('game')
  const [level, setLevel] = useState<Level>(1)

  const [timeMs, setTimeMs] = useState<number>(0)
  const [isRunning, setIsRunning] = useState(false)

  const [gameKey, setGameKey] = useState(0)

  const timerRef = useRef<number | null>(null)

  useEffect(() => {
        if (!isRunning) return

        const start = performance.now()

        timerRef.current = window.setInterval(() => {
            setTimeMs(performance.now() - start)
        }, 16)

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current)
                timerRef.current = null
            }
        }
    }, [isRunning])

    const startTimer = () => {
      if (isRunning) return
      setTimeMs(0)
      setIsRunning(true)
    }

    const resetTimer = () => {
      setIsRunning(false)
      setTimeMs(0)
    }

    const restartGame = () => {
      setIsRunning(false)
      setTimeMs(0)
      setGameKey((k) => k+1)
    }

    const resetGame = (nextLevel: Level) => {
        setLevel(nextLevel)
        restartGame()
    }

  return (
    <>
      <Header
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        level={level}
        onChangeLevel={resetGame}
        timeMs={timeMs}
      />

      {activeTab === 'game' && (
        <GameScreen
          key={gameKey}
          level={level}
          onGameStart={startTimer}
          onGameEnd={resetTimer}
          onExitToHome={restartGame}
        />
      )}

      {activeTab === 'ranking' && <RankingScreen />}
    </>
  )
}

export default App