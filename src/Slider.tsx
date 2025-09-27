/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import { getThemeStyle } from "./theme";
import styled from "@emotion/styled";

const images: string[] = [
  "pocketmon/Charmander.png",
  "pocketmon/Charmeleon.png",
  "pocketmon/Charizard.png",
  "pocketmon/Mega_Charizard_X.png",
  "pocketmon/Mega_Charizard_Y.png",
];
const Slidercontainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Slidertrack = styled.div`
  display: flex;
  will-change: transform;
`;

const Slideritem = styled.div`
  flex: 0 0 20%; /* 한 화면에 5개 */
`;

const Sliderimg = styled.img`
  width: 90%;
  padding-bottom: 10%;
  padding-top: 10%;
  display: block;

  &:hover {
    transform: scale(1.1);
  }
`;

function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const position = useRef<number>(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const speed: number = 3.0; // 픽셀 per frame (속도)

    const animate = () => {
      position.current -= speed;
      if (Math.abs(position.current) >= slider.scrollWidth / 2) {
        position.current = 0;
      }
      slider.style.transform = `translateX(${position.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // 이미지 배열을 2배로 늘려 무한 슬라이더처럼 보이게 합니다.
  const repeatedImages: string[] = [...images, ...images];

  return (
    <Slidercontainer>
      <Slidertrack ref={sliderRef}>
        {repeatedImages.map((img, index) => (
          <Slideritem key={index}>
            <Sliderimg src={img} alt={`slide-${index}`} />
          </Slideritem>
        ))}
      </Slidertrack>
    </Slidercontainer>
  );
}

export default Slider;
