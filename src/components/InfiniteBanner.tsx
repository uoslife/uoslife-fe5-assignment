import type { ReactNode } from 'react';
import { InfiniteBannerWrapper, Track } from './InfiniteBanner.style';
import Flex from './common/Flex';

interface InfiniteBannerProps {
  children: ReactNode;
}

export default function InfiniteBanner({ children }: InfiniteBannerProps) {
  return (
    <InfiniteBannerWrapper>
      <Track>
        <Flex gap="0.75rem">{children}</Flex>
        {/* 두 번째 복사본: 웹 접근성을 고려해 스크린 리더가 무시하도록 함 */}
        <Flex gap="0.75rem" aria-hidden="true">
          {children}
        </Flex>
      </Track>
    </InfiniteBannerWrapper>
  );
}
