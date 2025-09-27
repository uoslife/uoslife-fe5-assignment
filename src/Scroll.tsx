/** @jsxImportSource @emotion/react */

import { useRef } from "react";
import styled from "@emotion/styled";

const images = [
  "number/1.png",
  "number/2.png",
  "number/3.png",
  "number/4.png",
  "number/5.png",
  "number/6.png",
  "number/7.png",
  "number/8.png",
  "number/9.png",
  "number/10.png",
];
const Scrollcontainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
  height: 300px;
`;
const Scrollbutton = styled.button`
  font-size: ${props => props.theme.fontSize.xxl};
  background: ${props => props.theme.backgroundcolors.scrollbutton};
  border: none;
  cursor: pointer;
  user-select: none;
  padding: 0 10px;
  height: 50%;
  display: flex;
  align-items: center; /* 세로 중앙 */
  justify-content: center; /* 가로 중앙 */
`;
const Scrollitem = styled.div`
  flex: 0 0 auto;
  width: 300px; /* 정사각형 가로 크기 */
  height: 300px; /* 정사각형 세로 크기 */
  overflow: hidden; /* 이미지가 넘치면 잘라냄 */
  border-radius: 8px;
  box-shadow: 0 2px 5px ${props => props.theme.colors.whitetext};
`;

const Scrollimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
  display: block; /* 불필요한 여백 제거 */
`;

const Scrollview = styled.div`
  overflow-x: auto;
  display: flex;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  flex-grow: 1;
  gap: 10px;
  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
`;

function Scroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToStart = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollToEnd = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Scrollcontainer>
      <Scrollbutton onClick={scrollToStart} aria-label="왼쪽 끝으로 이동">
        {"<"}
      </Scrollbutton>
      <Scrollview ref={scrollRef}>
        {images.map((src, idx) => (
          <Scrollitem key={idx}>
            <Scrollimg src={src} alt={`number-${idx + 1}`} draggable={false} />
          </Scrollitem>
        ))}
      </Scrollview>
      <Scrollbutton onClick={scrollToEnd} aria-label="오른쪽 끝으로 이동">
        {">"}
      </Scrollbutton>
    </Scrollcontainer>
  );
}

export default Scroll;
