import styled from "@emotion/styled";
import UserContext from "../../context/userContext";
import { useContext } from "react";

const RankTable = styled.table`
  margin-top: 10%;
  padding: 100px;;
  border-collapse:collapse; /* 꼭 써야함! */
  border-spacing: 10px 10px;
  margin: 0 auto;  
  width: 700px;
  height: 100%;
  text-align: center;
  table-layout: fixed;
`;

const Rankingdiv = styled.div`
  position:relative;
`;

const Initbutton = styled.button`
  top:0%;
  right:10%;
  position: absolute;
`;
const Titletr = styled.tr`
  background-color: rgb(188, 188, 245);
`;
const Styledtd = styled.td`
  border: 1px solid black; /* 모든 셀에 1px 검은색 실선 적용 */
  padding: 8px;
  height: 100px;
`;

const Ranking = () => {
  const { result, setResults } =
    useContext(UserContext);

  const handleReset = () => {
    localStorage.clear();
    setResults([]);
  };

  
  return (
    <Rankingdiv>
      <p>랭킹</p>
      <Initbutton onClick={handleReset}>
        초기화
      </Initbutton>
      <RankTable>
        <tbody>
          <Titletr>
            <Styledtd>타임스탬프</Styledtd>
            <Styledtd>레벨</Styledtd>
            <Styledtd>플레이 시간</Styledtd>
          </Titletr>
          {result.map((result, index) => (
            <tr key={index}>
              <Styledtd>{result.time}</Styledtd>
              <Styledtd>{result.level}</Styledtd>
              <Styledtd>{result.score.toFixed(2)}</Styledtd>
            </tr>
          ))}
        </tbody>
      </RankTable>
    </Rankingdiv>
  );
};

export default Ranking;
