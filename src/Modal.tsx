import React from 'react';
import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null; // modal-root가 없으면 렌더링 안 함

  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>확인</button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
