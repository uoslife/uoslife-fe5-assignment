import styled from '@emotion/styled';
import Flex from './common/Flex';
import { Scroll } from './common/style';

export const InfiniteBannerWrapper = styled(Flex)`
  width: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
`;

export const Track = styled.div`
  width: fit-content;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  animation: ${Scroll} 10s linear infinite;
`;
