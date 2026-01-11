import styled from '@emotion/styled';

export const LevelSelect = styled.select`
  padding: 1rem 3rem;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;

  &.active {
    background-color: #122e4d; /* 테마 색상 사용 권장 */
    color: white;
    font-weight: bold;
  }
`;
