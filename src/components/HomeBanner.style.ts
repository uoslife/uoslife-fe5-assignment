import styled from '@emotion/styled';
import homeBanner from '../assets/homeBanner.webp';

export const HomeBannerWrapper = styled.div`
  width: 100%;
  height: 700px;
  background: url(${homeBanner}) no-repeat top left / cover;
  position: relative;
  top: 0;
`;

export const HomeContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  position: absolute;
  bottom: 150px;
  right: ${({ theme }) => theme.spacing.sm};
`;

export const HomeBannerTitle = styled.h1`
  color: ${({ theme }) => theme.colors.background};
  font-weight: 900;
  font-size: 3rem;
`;

export const HomeBannerButton = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing['2xl']}`};
  border-radius: ${({ theme }) => theme.spacing.sm};
`;
