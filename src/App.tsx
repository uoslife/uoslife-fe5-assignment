import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import GameScreen from './screens/GameScreen'
import type { Tab, Level } from './types'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('game')
  const [level, setLevel] = useState<Level>(1)
  const [timeMs] = useState<number>(0)

  return (
    <>
      <Header
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        level={level}
        onChangeLevel={setLevel}
        timeMs={timeMs}
      />

      <main className="main">
        {activeTab === 'game' && (
          <GameScreen level={level} />
        )}
      </main>
    </>
  )
}

export default App