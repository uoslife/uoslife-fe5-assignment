import styled from '@emotion/styled';
import { SectionTitle, SectionWrapper } from './common/style';
import Slider from './Slider';

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
  flex-shrink: 0;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function SliderSection() {
  return (
    <SectionWrapper id="scrollzone-view">
      <SectionTitle>스크롤뷰 zone</SectionTitle>

      <Slider>
        {Array.from({ length: 10 }).map((_, idx) => (
          <ImageWrapper key={idx}>
            <BannerImage src={`https://picsum.photos/200/200?random=${idx}`} />
          </ImageWrapper>
        ))}
      </Slider>
    </SectionWrapper>
  );
}
