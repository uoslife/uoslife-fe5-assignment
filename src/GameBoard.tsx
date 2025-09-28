import React from "react";
import styled from "@emotion/styled";

interface GameBoardProps {
  row: number;
  index: number;
  numbers1: (number | null)[];
  clickCount: number[];
  buttonHandler: (idx: number) => void;
}
const GameTable = styled.table`
  border-collapse: separate;
  border-spacing: 10px 10px;
  margin: auto;
  width: 700px;
  height: 700px;
  text-align: center;
  table-layout: fixed;
`
const GameButton = styled.button`
  flex:1;
  border: 1px solid black; /* 각 셀 테두리 */
  text-align: center;
  padding: 0;
  margin:0;
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in-out;
  :active {
  background-color: aliceblue; /* 투명도를 줘서 깜빡이는 느낌 */
}
`

const GameBoard: React.FC<GameBoardProps> = ({
  row,
  index,
  numbers1,
  clickCount,
  buttonHandler,
}) => {
  return (
    <main>
      <h2>다음 숫자 "{index + 1}"</h2>
      <GameTable>
        <tbody>
          {Array.from({ length: row }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: row }).map((_, colIndex) => {
                const idx = rowIndex * row + colIndex;
                return (
                  <td key={colIndex}>
                    <GameButton
                      onClick={() => buttonHandler(idx)}
                      className={
                        clickCount[idx] === 1
                          ? "clicked-once"
                          : clickCount[idx] === 2
                          ? "clicked-twice"
                          : "clicked-none"
                      }
                    >
                      {numbers1[idx]}
                    </GameButton>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </GameTable>
    </main>
  );
};

export default GameBoard;
