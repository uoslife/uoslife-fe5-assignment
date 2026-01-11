import { useRef, type ReactNode } from 'react';
import { SliderWrapper } from './Slider.style';
import styled from '@emotion/styled';

interface SliderProps {
  children: ReactNode;
}

const SliderContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const MoveButton = styled.div`
  height: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => `${theme.colors.background}60`};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: ${({ theme }) => theme.colors.text};
  z-index: 10;
  cursor: pointer;
`;

const LeftMoveButton = styled(MoveButton)`
  left: 0;
`;

const RightMoveButton = styled(MoveButton)`
  top: 0;
  right: 0;
`;

export default function Slider({ children }: SliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollRight = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollWidth,
      behavior: 'smooth',
    });
  };

  return (
    <SliderContainerWrapper>
      <LeftMoveButton onClick={handleScrollLeft}>&lt;</LeftMoveButton>
      <SliderWrapper ref={scrollRef}>{children}</SliderWrapper>
      <RightMoveButton onClick={handleScrollRight}>&gt;</RightMoveButton>
    </SliderContainerWrapper>
  );
}
