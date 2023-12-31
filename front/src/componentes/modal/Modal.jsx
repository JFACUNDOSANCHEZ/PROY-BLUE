import React from 'react';
import styles from './Modal.module.css'; // Importa los estilos CSS Modules

const Modal = ({ children, closeModal }) => {
  return (
    <div className={styles.modalBackground} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;