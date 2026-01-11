import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { useGameLogic } from './hooks/useGameLogic';
import Header from './components/layout/Header';
import { useState } from 'react';
import type { TabType } from './types';
import GamePage from './components/page/GamePage';
import Modal from './components/common/Modal';
import { formatDateTime } from './utils';
import RankingPage from './components/page/RankingPage';

function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('GAME');
  const {
    state: gameState,
    changeLevel,
    clickNumber,
    resetGame,
  } = useGameLogic();

  return (
    <ThemeProvider theme={theme}>
      <Header
        gridSize={gameState.gridSize}
        startTime={gameState.startTime}
        endTime={gameState.endTime}
        onChangeLevel={changeLevel}
        activeTab={currentTab}
        onTabChange={setCurrentTab}
      />
      {currentTab === 'GAME' && (
        <GamePage gameState={gameState} onClickNumber={clickNumber} />
      )}

      {currentTab === 'RANKING' && <RankingPage />}
      {gameState.endTime !== null && gameState.startTime !== null && (
        <Modal onClose={resetGame}>
          <h2>오호 좀 하시는데요 ~~</h2>
          <p>{formatDateTime(gameState.endTime)}</p>
          <p>Level: {gameState.gridSize - 2}</p>
          <p>
            TIME:{' '}
            {((gameState.endTime - gameState.startTime) / 1000).toFixed(2)}
          </p>
        </Modal>
      )}
    </ThemeProvider>
  );
}

export default App;
