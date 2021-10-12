import React, { useState } from 'react';
import styles from './HoverButton.module.scss';

const HoverButton = ({ className, children, src, hoverSrc, onClick }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleMouseOver = () => setImgSrc(hoverSrc);

  const handleMouseOut = () => setImgSrc(src);

  return (
    <button
      className={`${styles.HoverButton} ${className || ''}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
    >
      <img className={styles.icon} src={imgSrc} />
      {children}
    </button>
  );
};

export default HoverButton;
