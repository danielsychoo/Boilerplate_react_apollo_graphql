import { useCallback } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const getModalTag = useCallback(() => document.getElementById('modal'), []);
  return createPortal(children, getModalTag());
};

export default Portal;
