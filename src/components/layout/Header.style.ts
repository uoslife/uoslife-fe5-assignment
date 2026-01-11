import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  left: 0;
  right: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.m} ${theme.spacing['4xl']}`};
`;

export const LinkStyle = styled.a`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;
