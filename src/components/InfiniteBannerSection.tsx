import styled from '@emotion/styled';
import { SectionTitle, SectionWrapper } from './common/style';
import InfiniteBanner from './InfiniteBanner';

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;

  &:hover > img {
    transform: scale(1.4);
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
`;

export default function InfiniteBannerSection() {
  return (
    <SectionWrapper id="infinite-banner">
      <SectionTitle>무한배너 section</SectionTitle>
      <InfiniteBanner>
        {Array.from({ length: 10 }).map((_, idx) => (
          <ImageWrapper key={idx}>
            <BannerImage src={`https://picsum.photos/200/200?random=${idx}`} />
          </ImageWrapper>
        ))}
      </InfiniteBanner>
    </SectionWrapper>
  );
}
