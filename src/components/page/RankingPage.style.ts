import styled from '@emotion/styled';

export const RankingWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing['2xl']} auto;
  max-width: 75%;
  background-color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  th {
    padding: 1rem;
    background-color: #80808050;
    color: #4a5568;
    font-weight: 600;
    border: 1px solid #80808050;
    white-space: nowrap;
  }

  td {
    padding: 1rem;
    border: 1px solid #80808050;
    color: #2d3748;
  }
`;

export const ResetButton = styled.button`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.text};
  top: ${({ theme }) => theme.spacing.m};
  right: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => `0.5rem ${theme.spacing.m}`};
  border-radius: 0.5rem;
`;
