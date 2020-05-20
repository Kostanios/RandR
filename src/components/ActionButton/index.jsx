import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

/**
 * Universal button component.
 * @param {function} callback - callback on button click.
 * @param {boolean} disabled - is button disabled.
 * @param {string} buttonText - button text.
 */
const ActionButton = ({
  callback = () => {},
  buttonText = 'Click',
  fullWidth = false,
  disabled = false
}) => {
  return (
    <div
      className={`${styles.button} ${disabled ? styles.buttonDisabled : ''} ${fullWidth ? styles.buttonFullWidth : ''}`}
      onClick={() => disabled ? false : callback()}
    >
      <div className={styles.buttonText}>{buttonText}</div>
    </div>
  );
};

ActionButton.propTypes = {
  callback: PropTypes.func,
  buttonText: PropTypes.string,
  stylesObject: PropTypes.any
};

export default ActionButton;
