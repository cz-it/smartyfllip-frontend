import React, { ChangeEvent } from 'react';
import styles from './ModalWindow.module.css';

interface AddStackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  stackName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
}

const AddStackModal: React.FC<AddStackModalProps> = ({ isOpen, onClose, onSave, stackName, onChange, title }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <input
          type="text"
          value={stackName}
          onChange={onChange}
          placeholder="Enter stack name"
          className={styles.modalInput}
        />
        <button onClick={onSave} className={styles.saveBtn}>Save</button>
      </div>
    </div>
  );
};

export default AddStackModal;
