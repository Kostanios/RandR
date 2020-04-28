import React from 'react';
import styles from './styles.module.scss';

const SheetSection = ({
  disableBottomLine,
  disableTopLine,
  children
}) => {
  const wrapperClasses = [
    styles.wrapper,
    disableBottomLine ? styles.bottomLineDisabled : undefined,
    disableTopLine ? styles.topLineDisabled : undefined
  ];
  return (
    <div className={wrapperClasses}>
      { children }
    </div>
  );
}

export default SheetSection;
