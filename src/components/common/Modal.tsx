import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  min-width: 50%;
  min-height: 50%;
  margin: auto;
  background-color: #fff;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export default function Modal({ onClose, children }: ModalProps) {
  return createPortal(
    <BackDrop>
      <ContentWrapper>
        {children}
        <button
          onClick={onClose}
          css={css`
            margin-top: 1.5rem;
            padding: 0.75rem 2rem;
            background-color: #0e24cd;
            color: white;
            font-weight: bold;
            border-radius: 8px;
            border: none;
            cursor: pointer;
          `}
        >
          다시하기
        </button>
      </ContentWrapper>
    </BackDrop>,
    document.body
  );
}
