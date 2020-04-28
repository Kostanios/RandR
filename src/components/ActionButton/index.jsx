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
  disabled = false
}) => {
  return (
    <div
      style={{ disabled }}
      className={[ styles.button, disabled ? styles.buttonDisabled : null ]}
      onClick={() => disabled ? false : callback()}
    >
      { buttonText }
    </div>
  );
};

ActionButton.propTypes = {
  callback: PropTypes.func,
  buttonText: PropTypes.string,
  stylesObject: PropTypes.any
};

export default ActionButton;
