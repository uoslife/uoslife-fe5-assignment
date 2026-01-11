import { useEffect, useState } from 'react';
import type { RankRecord } from '../../types';
import { RankingWrapper, ResetButton, Table } from './RankingPage.style';

export default function RankingPage() {
  const [ranks, setRanks] = useState<RankRecord[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('ranks');
    if (saved) {
      const parsedData: RankRecord[] = JSON.parse(saved);

      const sortedData = parsedData.sort((a, b) => {
        if (b.level !== a.level) {
          return b.level - a.level;
        }
        return a.duration - b.duration;
      });

      setRanks(sortedData);
    }
  }, []);

  const handleReset = () => {
    localStorage.removeItem('ranks');
    setRanks([]);
  };

  return (
    <RankingWrapper>
      <h1>랭킹🏆</h1>
      <Table>
        <thead>
          <th>타임스탬프</th>
          <th>레벨</th>
          <th>플레이 시간</th>
        </thead>
        <tbody>
          {ranks.map((record, index) => (
            <tr key={`${record.timestamp}-${index}`}>
              <td>{record.timestamp}</td>
              <td>{record.level}</td>
              <td>{record.duration.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ResetButton onClick={handleReset}>초기화</ResetButton>
    </RankingWrapper>
  );
}
