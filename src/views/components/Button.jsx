import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({onClick, disabled = false, text, className = ''}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    type="button"
    className={className}
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
