import React from 'react'
import PropTypes from 'prop-types'

import './customField.sass'

const CustomField = ({
  input,
  label,
  type,
  meta: { touched, error },
  name,
}) => (
  <div className="form-field">
    <label className="form-field__description" htmlFor={name}>
      {label}
    </label>
    <div className="form-field__input">
      <input {...input} type={type} />
      {touched && (error && <span className="form-field__error">{error}</span>)}
    </div>
  </div>
)

CustomField.propTypes = {
  input: PropTypes.element,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({ touched: PropTypes.bool, error: PropTypes.string }),
}

export default CustomField
