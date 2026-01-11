import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const SectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing['2xl']} 0;
`;

export const SectionWrapper = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;
`;

export const Scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;
