import type { ChangeEvent } from 'react';
import Flex from '../common/Flex';
import { HeaderWrapper, NavButton } from './Header.style';
import { css } from '@emotion/react';
import Timer from '../common/Timer';
import type { TabType } from '../../types';

type HeaderProps = {
  gridSize: number;
  startTime: number | null;
  endTime: number | null;
  onChangeLevel: (level: number) => void;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
};

export default function Header({
  gridSize,
  startTime,
  endTime,
  onChangeLevel,
  activeTab,
  onTabChange,
}: HeaderProps) {
  const handleLevelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLevel = Number(e.target.value);
    onChangeLevel(selectedLevel);
  };

  return (
    <HeaderWrapper>
      <Flex gap="3rem">
        <h1>1 to 50</h1>
        <NavButton
          className={activeTab === 'GAME' ? 'active' : ''}
          onClick={() => onTabChange('GAME')}
        >
          게임🎰
        </NavButton>
        <NavButton
          className={activeTab === 'RANKING' ? 'active' : ''}
          onClick={() => onTabChange('RANKING')}
        >
          랭킹🏆
        </NavButton>
      </Flex>
      {activeTab === 'GAME' && (
        <Flex gap="3rem">
          <select
            value={gridSize}
            onChange={handleLevelChange}
            css={css`
              padding: 6px 10px;
            `}
          >
            {Array.from({ length: 3 }).map((_, idx) => (
              <option key={idx} value={idx + 3}>
                Level {idx + 1}
              </option>
            ))}
          </select>
          <Timer startTime={startTime} endTime={endTime} />
        </Flex>
      )}
    </HeaderWrapper>
  );
}
