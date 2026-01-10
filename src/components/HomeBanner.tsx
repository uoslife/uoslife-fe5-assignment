import {
  HomeBannerButton,
  HomeBannerTitle,
  HomeBannerWrapper,
  HomeContentSection,
} from './HomeBanner.style';

export default function HomeBanner() {
  return (
    <HomeBannerWrapper>
      <HomeContentSection>
        <HomeBannerTitle>시대생 프론트 아자아자🌊</HomeBannerTitle>
        <HomeBannerButton>→ 바로가기</HomeBannerButton>
      </HomeContentSection>
    </HomeBannerWrapper>
  );
}
