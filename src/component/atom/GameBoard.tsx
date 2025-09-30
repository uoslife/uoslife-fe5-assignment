import styled from "@emotion/styled";
import { useRef, useState, useEffect, useContext } from "react";
import UserContext from "../../userContext";
import Modal from "../../Modal";

interface GameButtonProps {
  clickCount: number;
}
interface GameData {
  time: string; // 날짜 문자열 (toString() 결과)
  score: number; // 점수 (seconds 변수)
  level: number; // 레벨 (row - 2 계산 결과)
}
const GameTable = styled.table`
  border-collapse: separate;
  border-spacing: 10px 10px;
  margin: auto;
  width: 700px;
  height: 700px;
  text-align: center;
  table-layout: fixed;
`;

const GameButton = styled.button<GameButtonProps>`
  background-color: ${(props) => {
    if (props.clickCount === 1) {
      return "lightblue";
    }
    if (props.clickCount === 2) {
      return "rgb(255, 255, 255)";
    }
    return "rgb(188, 188, 245)";
  }};
  color: ${(props) => {
    if (props.clickCount === 2) {
      return "rgb(255, 255, 255)";
    } else {
      return "black";
    }
  }};

  flex: 1;
  border: 1px solid black;
  text-align: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:active {
    background-color: aliceblue;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const GameBoard = ({}) => {
  const { level, setResults, seconds, setSeconds } = useContext(UserContext);
  const row = level === "Lv1" ? 3 : level === "Lv2" ? 4 : 5;
  const [numbers1, setNumbers1] = useState<(number | null)[]>([]);
  const [numbers2, setNumbers2] = useState<number[]>([]);
  const [index, setIndex] = useState(0); // 현재 눌러야 되는 번호-1
  const intervalRef = useRef<number | null>(null); //현재 게임 시간
  const [clickCount, setClickCount] = useState<number[]>(
    Array(row * row).fill(0)
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const getRandomNumbers = (row: number): [number[], number[]] => {
    const count = row * row;
    const arr1 = Array.from({ length: count }, (_, i) => i + 1);
    const arr2 = Array.from({ length: count }, (_, i) => i + 1 + count);
    return [shuffleArray(arr1), shuffleArray(arr2)];
  };
  const shuffleArray = (arr: number[]): number[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    gameinit();
    return () => stopTimer();
  }, [level]);

  const gameinit = () => {
    const [arr1, arr2] = getRandomNumbers(row);
    setNumbers1(arr1);
    setNumbers2(arr2);
    setClickCount(Array(row * row).fill(0));
  };

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    const startTime = Date.now();
    setSeconds(0);

    intervalRef.current = window.setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      setSeconds(elapsed);
    }, 10);
  };
  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIndex(0);
    setSeconds(0);
  };
  function clickCountPlus(idx: number) {
    //버튼마다 눌러진 횟수 증가
    const prev = clickCount;
    const newCounts = [...prev];
    newCounts[idx] = prev[idx] + 1;
    setClickCount(newCounts);
  }

  const updateNumbers = (idx: number) => {
    const newNumbers = [...numbers1]; // 기존 배열 복사
    newNumbers[idx] = numbers2[idx]; // 수정
    setNumbers1(newNumbers); // 상태 업데이트
  };

  const buttonHandler = (idx: number) => { //메인 로직
    if (numbers1[idx] != index + 1) {
      return;
    }
    if (index + 1 == row * row * 2) {
      // 종료조건 먼저 검사
      // 종료조건
      stopTimer();
      const formatted = new Date(Date.now()).toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const gameData = {
        time: formatted.toString(),
        score: seconds,
        level: row - 2,
      };
      saveData(gameData);

      openModal();
      //alert(`점수: ${gameData.score}, 레벨: ${gameData.Lv}`);
      gameinit();
      setResults(JSON.parse(localStorage.getItem("gameResults") || "[]"));
      return;
    } else if (index == 0) {
      // 게임 진행중이 아님
      startTimer();
    }
    updateNumbers(idx);
    clickCountPlus(idx);
    setIndex((prevIndex) => prevIndex + 1);
  };

  const loadData = () => {
    const latest = JSON.parse(localStorage.getItem("gameResults") || "[]");

    // 최신 순으로 정렬
    latest.sort(
      (a: GameData, b: GameData) =>
        new Date(b.time).getTime() - new Date(a.time).getTime()
    );
    return latest[0];
  };

  function saveData(newData: GameData) {
    const Data = localStorage.getItem("gameResults");
    let results: GameData[] = Data ? JSON.parse(Data) : [];

    results.push(newData);

    results.sort((a: GameData, b: GameData) => {
      // 1) Lv 내림차순
      if (b.level !== a.level) {
        return b.level - a.level; // 큰 Lv가 앞에
      }
      // 2) score 오름차순
      return a.score - b.score; // 작은 score가 앞에
    });

    results = results.slice(0, 3);
    localStorage.setItem("gameResults", JSON.stringify(results));
  }

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
                      clickCount={clickCount[idx] || 0}
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
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>clear!</h2>
          <p>날짜 : {loadData().time}</p>
          <p>Level : {loadData().level}</p>
          <p>Time : {loadData().score}</p>
        </Modal>
      )}
    </main>
  );
};

export default GameBoard;
