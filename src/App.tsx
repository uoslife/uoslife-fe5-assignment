/** @jsxImportSource @emotion/react */

import { useState } from "react";
import Slider from "./Slider";
import Header from "./Header";
import Scroll from "./Scroll";
import styled from "@emotion/styled";

const Main = styled.main`
  color: ${(props) => props.theme.colors.whitetext};
  background-color: ${(props) => props.theme.colors.contentback};
`;
const BackImg = styled.img`
  background-size: cover;
  padding: 0;
  width: 100%;
  z-index: -1;
`;
const Backtxt = styled.h1`
  position: absolute;
  right: 10px;
  bottom: 100px;
  z-index: 1;
  padding: 0px;
  border: 0px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.whitetext};
`;
const Backlink = styled.a`
  position: absolute;
  right: 10px;
  bottom: 30px;
  z-index: 3;
  padding: 10px 100px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background-color: ${(props) => props.theme.backgroundcolors.black};
  color: ${(props) => props.theme.colors.whitetext};
  transition: all 0.3s ease;
  text-decoration: none; /* a 태그의 기본 밑줄 제거 */
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.backgroundcolors.hover}
    transform: translateY(-3px);
    box-shadow: 0 4px 8px ${(props) => props.theme.colors.whitetext};
  }
`;
const Topcontent = styled.article`
  position: relative;
`;
const Logoimg = styled.img`
  height: 60px;
  padding: 10px;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(
      0 0 2em ${(props) => props.theme.backgroundcolors.hover}
    );
  }
`;
const Content = styled.section`
  text-align: left;
`;
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Topcontent>
          <BackImg src="./sky_img.png" draggable="false" alt="background img" />
          <Backtxt>시대생 프론트 아자아자💪</Backtxt>
          <Backlink href="https://www.uoslife.team/" target="_blank">
            바로가기
          </Backlink>
        </Topcontent>
        <section>
          <Logoimg src="./logo.png" alt="app logo" />
          <h1>5기 프론트 시대생 onboarding ✈️</h1>
          <Counter></Counter>
        </section>
        <Content>
          <h1>무한배너 section</h1>
          <Slider />
          <h1>스크롤뷰 zone</h1>
          <Scroll />
        </Content>
      </Main>
    </>
  );
}

export default App;
