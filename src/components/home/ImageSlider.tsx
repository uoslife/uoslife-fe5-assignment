import styled from "@emotion/styled";
import { useRef, useState } from "react";

const images = Object.values(
  import.meta.glob("../../assets/images/*.{jpg,JPG}", { eager: true, as: "url" })
);

const Outer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

const ArrowButton = styled.button<{ direction: "left" | "right" }>`
  width: 48px;
  height: 250px;
  background: rgba(30, 30, 30, 0.7);
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.2s;
  ${({ direction }) =>
    direction === "left"
      ? "border-top-left-radius: 16px; border-bottom-left-radius: 16px;"
      : "border-top-right-radius: 16px; border-bottom-right-radius: 16px;"}
  &:hover {
    background: rgba(30, 30, 30, 0.95);
  }
`;

const SliderWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  scroll-behavior: smooth;
  cursor: grab;
  user-select: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &:active {
    cursor: grabbing;
  }
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  border-radius: 12px;
  transition: transform 0.3s;
  pointer-events: none;
  &:hover {
    transform: scale(1.1);
    z-index: 2;
  }
`;

const SectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

function ImageSlider() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollTo = (direction: "left" | "right") => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (direction === "left") {
      wrapper.scrollLeft = 0;
    } else {
      wrapper.scrollLeft = wrapper.scrollWidth;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    
    setIsDragging(true);
    setStartX(e.pageX - wrapper.offsetLeft);
    setScrollLeft(wrapper.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    
    e.preventDefault();
    const x = e.pageX - wrapper.offsetLeft;
    const walk = x - startX;
    wrapper.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <SectionTitle>스크롤뷰 zone</SectionTitle>
      <Outer>
        <ArrowButton direction="left" onClick={() => scrollTo("left")}>⟨</ArrowButton>
        <SliderWrapper
          ref={wrapperRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <Track>
            {images.map((src, idx) => (
              <Img src={src} alt={`carousel-img-${idx}`} key={idx} />
            ))}
          </Track>
        </SliderWrapper>
        <ArrowButton direction="right" onClick={() => scrollTo("right")}>⟩</ArrowButton>
      </Outer>
    </>
  );
}

export default ImageSlider;