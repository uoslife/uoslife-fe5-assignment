import { useEffect, useState,useRef } from 'react'
import './App.css'
import Modal from './Modal'

function App() {

  const [mode,setMode] = useState(0);
  const [row,setRow] = useState(3);
  const [level,setLevel] = useState('Lv1');
  const [numbers1, setNumbers1] = useState<(number|null)[]>([]);
  const [numbers2, setNumbers2] = useState<number[]>([]);
  const [index,setIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const flag = useRef<boolean>(false);

  const [date,setDate] = useState<string>("");

  const [clickCount, setClickCount] = useState<number[]>(Array(row * row).fill(0));

  const [results, setResults] = useState<GameData[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  interface GameData {
  time: string;    // 날짜 문자열 (toString() 결과)
  score: number;   // 점수 (seconds 변수)
  Lv: number;      // 레벨 (row - 2 계산 결과)
}

  function clickCountPlus(idx:number){
    const prev = clickCount
    const newCounts = [...prev];
    newCounts[idx] = prev[idx] + 1;
    setClickCount(newCounts);}

    const shuffleArray = (arr: number[]): number[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getRandomNumbers1 = (row: number): [number[],number[]] => {
    const count = row * row;
    const arr1 = Array.from({ length: count }, (_, i) => i + 1);
    const arr2 = Array.from({ length: count }, (_, i) => i + 1+count);
    return [shuffleArray(arr1), shuffleArray(arr2)];
  };

  const handleChangeLv = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'Lv1'){
      setRow(3);
      stopTimer();
      setSeconds(0);
      setLevel("Lv1")
    }
    else if (e.target.value === 'Lv2'){
      setRow(4);
      stopTimer();
      setSeconds(0);
      setLevel("Lv2")
    }
    else if (e.target.value === 'Lv3'){
      setRow(5);
      stopTimer();
      setSeconds(0);
      setLevel("Lv3")
      
    }
  };

  const startTimer = () => {
    // 이미 실행 중이면 중복 실행 방지
    if (intervalRef.current !== null) return;
    setSeconds(0);
    intervalRef.current = window.setInterval(() => {
    setSeconds(prev => prev + 0.01);
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
    const [arr1,arr2] = getRandomNumbers1(row);
    setNumbers1(arr1);
    setNumbers2(arr2);
    setIndex(0);
    setClickCount(Array(row * row).fill(0))
  }, [row]);

  const buttonHandler = (idx:number) => {

    if (flag.current === true){  // 게임 진행중이 맞음
      if (numbers1[idx] === (index+1)){
        setIndex(prevIndex => prevIndex + 1);
      
      
      
        if (numbers1[idx] != numbers2[idx]){
          const newNumbers = [...numbers1]; // 기존 배열 복사
          newNumbers[idx] = numbers2[idx];  // 수정
          setNumbers1(newNumbers);          // 상태 업데이트
          
          if (clickCount[idx]===0){
            clickCountPlus(idx);
        }

        }
        else if(numbers1[idx] === numbers2[idx]){
          const newNumbers = [...numbers1]; // 기존 배열 복사
          newNumbers[idx] = null;  // 수정
          setNumbers1(newNumbers);

          if (clickCount[idx]===1){
            clickCountPlus(idx);
        }
      }
      
        

        if (numbers1[idx] === (row*row*2)){ // 종료조건
          stopTimer();
          const dateNum = new Date(Date.now())
          const formatted = dateNum.toLocaleString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          });
          setDate(formatted);
          const gameData = {
            time: date.toString(),
            score: seconds,
            Lv: (row-2)
          };
          saveData(gameData);
          
          openModal();
          //alert(`점수: ${gameData.score}, 레벨: ${gameData.Lv}`);
          const [arr1,arr2] = getRandomNumbers1(row);
          setNumbers1(arr1);
          setNumbers2(arr2);
          setClickCount(Array(row * row).fill(0))
        }
      }
    }
    
    else if (flag.current === false){ // 게임 진행중이 아님
        //alert(`idx: ${idx}`)
        if (numbers1[idx] === 1){
          startTimer()
          flag.current = true;
          setIndex(prevIndex => prevIndex + 1);
          const newNumbers = [...numbers1]; // 기존 배열 복사
          newNumbers[idx] = numbers2[idx];  // 수정
          setNumbers1(newNumbers);          // 상태 업데이트
          clickCountPlus(idx);
        }
      }
    }


  function saveData(newData:GameData){
    const Data = localStorage.getItem('gameResults');
    let results:GameData[] = Data ? JSON.parse(Data) : [];

    results.push(newData);

    results.sort((a:GameData, b:GameData) => {
      // 1) Lv 내림차순
      if (b.Lv !== a.Lv) {
        return b.Lv - a.Lv;  // 큰 Lv가 앞에
      }
      // 2) score 오름차순
      return a.score - b.score;  // 작은 score가 앞에
    });

    results = results.slice(0, 3);
    localStorage.setItem('gameResults', JSON.stringify(results));
  }

  return (
    <>
      <header>
        <ul className='leftmenu'>
          <li>
            1 to 50
          </li>
          <li>
            <button onClick={() => setMode(0)}>게임</button>
          </li>
          <li>
            <button onClick={() => {setMode(1);
              setResults(JSON.parse(localStorage.getItem('gameResults') || '[]'));}}>랭킹</button>
          </li>
        </ul>

        {mode === 0 && (
          <ul className='rightmenu'>
            <li>
              <select id="difficult" name="difficult" onChange={handleChangeLv} value={level}>
                <option value="Lv1">Level 1</option>
                <option value="Lv2">Level 2</option>
                <option value="Lv3">Level 3</option>
              </select>
            </li>
            <li>
              <div className='time'>
              {seconds.toFixed(2)}
              </div>
            </li>
          </ul>
        )}
      </header>
      {mode === 0 && (
        <main>
            <h2>다음 숫자 "{index+1}"</h2>
            <table>
              <tbody>
                {Array.from({ length: row }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {Array.from({ length: row }).map((_, colIndex) => {
                      const idx = rowIndex * row + colIndex;
                      return (
                        <td key={colIndex}>
                          <button
                            onClick={() => buttonHandler(idx)}
                            className={
                              clickCount[idx] === 1
                                ? 'clicked-once'
                                : clickCount[idx] === 2
                                ? 'clicked-twice'
                                : ''
                            }
                          >
                            {numbers1[idx]}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>            </table>
        </main>
      )}
      {mode === 1 && (
        <div className='ranking'>
          <p>랭킹</p>
          <button className='init' onClick={() => {
            localStorage.clear();
            setResults([]);
          }}>초기화</button>
          <table className="ranktable">
            <tbody>
              <tr style={{backgroundColor:'rgb(188, 188, 245)'}}>
                <td>타임스탬프</td>
                <td>레벨</td>
                <td>플레이 시간</td>
              </tr>
              <tr>
                <td>{results.length > 0 ? results[0].time : ''}</td>
                <td>{results.length > 0 ? results[0].Lv : ''}</td>
                <td>{results.length > 0 ? results[0].score.toFixed(2) : ''}</td>
              </tr>
              <tr>
                <td>{results.length > 1 ? results[1].time : ''}</td>
                <td>{results.length > 1 ? results[1].Lv : ''}</td>
                <td>{results.length > 1 ? results[1].score.toFixed(2) : ''}</td>
              </tr>
              <tr>
                <td>{results.length > 2 ? results[2].time : ''}</td>
                <td>{results.length > 2 ? results[2].Lv : ''}</td>
                <td>{results.length > 2 ? results[2].score.toFixed(2) : ''}</td>
              </tr>
            </tbody>

          </table>
        </div>
      )}
        {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>clear!</h2>
          <p>
            날짜 : {date}
            <br />
            Level : {row-2}
            <br />
            Time : {seconds.toFixed(2)}
          </p>
        </Modal>
      )}
    </>
  )
}

export default App
