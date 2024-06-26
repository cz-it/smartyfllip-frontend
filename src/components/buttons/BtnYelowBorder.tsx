import React from 'react';
import styles from './BtnYelowBorder.module.css';

interface YellowButtonProps {
  onClickHandler: () => void; 
  buttonText: string;
}

const BtnYelowBorder: React.FC<YellowButtonProps> = ({ onClickHandler, buttonText }) => {
  return (
    <button className={styles['yellow-button']} onClick={onClickHandler}>
      {buttonText}
    </button>
  );
}

export default BtnYelowBorder;
