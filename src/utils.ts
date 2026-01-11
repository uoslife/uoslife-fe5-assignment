const shuffleArray = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export function createInitialBoard(gridSize: number) {
  const totalCells = gridSize * gridSize;

  const frontNumbers = Array.from({ length: totalCells }, (_, i) => i + 1);
  const shuffledFront = shuffleArray([...frontNumbers]);

  const backNumbers = Array.from(
    { length: totalCells },
    (_, i) => i + 1 + totalCells
  );
  const shuffledBack = shuffleArray([...backNumbers]);

  return shuffledFront.map((val, index) => ({
    id: index,
    value: val,
    backValue: shuffledBack[index],
    isFront: true,
  }));
}

export const formatDateTime = (timestamp: number | null): string => {
  if (!timestamp) return '-';

  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
