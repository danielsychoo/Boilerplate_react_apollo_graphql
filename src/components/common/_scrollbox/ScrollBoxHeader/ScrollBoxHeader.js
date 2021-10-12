import React from 'react';
import styles from './ScrollBoxHeader.module.scss';
const ScrollBoxHeader = ({ title, columns }) => {
  return (
    <div className={styles.ScrollBoxHeader}>
      <div className={styles.title}>{title}</div>
      <div className={styles.columns}>
        {columns.map(({ id, name, style }) => (
          <span key={id} style={style}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollBoxHeader;
