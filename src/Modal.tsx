import React from 'react';
import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modalbackdrop = styled.div`
  position: fixed; /* 화면 스크롤에 상관없이 고정 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 검은색 반투명 배경 */
  
  /* Flexbox를 이용해 자식 요소를 중앙 정렬 */
  display: flex;
  justify-content: center; /* 수평 중앙 */
  align-items: center;    /* 수직 중앙 */
  z-index: 1000;
`;
const Modalcontent = styled.div`
  background-color: white;
  padding: 20px 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px; /* 모달의 최대 너비 제한 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null; // modal-root가 없으면 렌더링 안 함

  return ReactDOM.createPortal(
    <Modalbackdrop>
      <Modalcontent onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>확인</button>
      </Modalcontent>
    </Modalbackdrop>,
    modalRoot
  );
};

export default Modal;
