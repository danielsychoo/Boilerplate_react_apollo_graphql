import React from 'react';
import styles from './ScrollBoxItem.module.scss';
const ScrollBoxItem = ({ className, onClick, children }) => {
  return (
    <div
      className={`${styles.ScrollBoxItem} ${className || ''}`}
      onClick={onClick}
    >
      {children && children}
    </div>
  );
};
export default ScrollBoxItem;
