/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef, useContext } from "react";
import "./App.css";
import Modal from "./Modal";
import Header from "./header/Header";
import UserContext from "./userContext";
import Ranking from "./ranking";
import GameBoard from "./GameBoard";

function App() {
  const { mode, setMode, level, setLevel, result, setResults } =
    useContext(UserContext);
  const [numbers1, setNumbers1] = useState<(number | null)[]>([]);
  const [numbers2, setNumbers2] = useState<number[]>([]);
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const flag = useRef<boolean>(false);
  const [date, setDate] = useState<string>("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const row = level === "Lv1" ? 3 : level === "Lv2" ? 4 : 5;
  const [clickCount, setClickCount] = useState<number[]>(
    Array(row * row).fill(0)
  );

  interface GameData {
    time: string; // 날짜 문자열 (toString() 결과)
    score: number; // 점수 (seconds 변수)
    level: number; // 레벨 (row - 2 계산 결과)
  }

  function clickCountPlus(idx: number) {
    const prev = clickCount;
    const newCounts = [...prev];
    newCounts[idx] = prev[idx] + 1;
    setClickCount(newCounts);
  }

  const shuffleArray = (arr: number[]): number[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getRandomNumbers1 = (row: number): [number[], number[]] => {
    const count = row * row;
    const arr1 = Array.from({ length: count }, (_, i) => i + 1);
    const arr2 = Array.from({ length: count }, (_, i) => i + 1 + count);
    return [shuffleArray(arr1), shuffleArray(arr2)];
  };

  const handleChangeLv = (e: React.ChangeEvent<HTMLSelectElement>) => {
    stopTimer();
    setSeconds(0);

    if (e.target.value === "Lv1") {
      setLevel("Lv1");
    } else if (e.target.value === "Lv2") {
      setLevel("Lv2");
    } else if (e.target.value === "Lv3") {
      setLevel("Lv3");
    }
  };

  const startTimer = () => {
    // 이미 실행 중이면 중복 실행 방지
    if (intervalRef.current !== null) return;
    setSeconds(0);
    intervalRef.current = window.setInterval(() => {
      setSeconds((prev) => prev + 0.01);
    }, 10); // 1초 간격
  };

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIndex(0);
      flag.current = false;
    }
  };

  useEffect(() => {
    const [arr1, arr2] = getRandomNumbers1(row);
    setNumbers1(arr1);
    setNumbers2(arr2);
    setIndex(0);
    setClickCount(Array(row * row).fill(0));
  }, [row]);

  const buttonHandler = (idx: number) => {
    if (flag.current === true) {
      // 게임 진행중이 맞음
      if (numbers1[idx] === index + 1) {
        setIndex((prevIndex) => prevIndex + 1);

        if (numbers1[idx] != numbers2[idx]) {
          const newNumbers = [...numbers1]; // 기존 배열 복사
          newNumbers[idx] = numbers2[idx]; // 수정
          setNumbers1(newNumbers); // 상태 업데이트

          if (clickCount[idx] === 0) {
            clickCountPlus(idx);
          }
        } else if (numbers1[idx] === numbers2[idx]) {
          const newNumbers = [...numbers1]; // 기존 배열 복사
          newNumbers[idx] = null; // 수정
          setNumbers1(newNumbers);

          if (clickCount[idx] === 1) {
            clickCountPlus(idx);
          }
        }

        if (numbers1[idx] === row * row * 2) {
          // 종료조건
          stopTimer();
          const dateNum = new Date(Date.now());
          const formatted = dateNum.toLocaleString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });
          setDate(formatted);
          const gameData = {
            time: date.toString(),
            score: seconds,
            level: row - 2,
          };
          saveData(gameData);

          openModal();
          //alert(`점수: ${gameData.score}, 레벨: ${gameData.Lv}`);
          const [arr1, arr2] = getRandomNumbers1(row);
          setNumbers1(arr1);
          setNumbers2(arr2);
          setClickCount(Array(row * row).fill(0));
        }
      }
    } else if (flag.current === false) {
      // 게임 진행중이 아님
      //alert(`idx: ${idx}`)
      if (numbers1[idx] === 1) {
        startTimer();
        flag.current = true;
        setIndex((prevIndex) => prevIndex + 1);
        const newNumbers = [...numbers1]; // 기존 배열 복사
        newNumbers[idx] = numbers2[idx]; // 수정
        setNumbers1(newNumbers); // 상태 업데이트
        clickCountPlus(idx);
      }
    }
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
    <>
      <Header
        setResults={setResults}
        seconds={seconds}
        handleChangeLv={handleChangeLv}
      />
      {mode === 0 && (
        <GameBoard
          row={row}
          index={index}
          numbers1={numbers1}
          clickCount={clickCount}
          buttonHandler={buttonHandler}
        />
      )}
      {mode === 1 && <Ranking />}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>clear!</h2>
          <p>
            날짜 : {date}
            <br />
            Level : {row - 2}
            <br />
            Time : {seconds.toFixed(2)}
          </p>
        </Modal>
      )}
    </>
  );
}

export default App;
