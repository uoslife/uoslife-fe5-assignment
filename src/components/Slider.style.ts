import styled from '@emotion/styled';
import Flex from './common/Flex';

export const SliderWrapper = styled(Flex)`
  width: 100%;
  overflow-x: auto;
  gap: ${({ theme }) => theme.spacing.sm};
`;
