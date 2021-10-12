import React from 'react';
import styles from './LinkName.module.scss';
import { Link } from 'react-router-dom';

const LinkName = ({ children, className, to, onClick }) => (
  <Link className={`${styles.LinkName} ${className}`} to={to} onClick={onClick}>
    {children}
  </Link>
);

export default LinkName;
