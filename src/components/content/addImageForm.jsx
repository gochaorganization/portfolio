import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { portfolio as formReducer } from 'redux-form'

import './addImageForm.sass'

const Form = props => {
  const { handleSubmit } = props

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__field-wrapper">
        <label className="form__field-description" htmlFor="title">
          Title
        </label>
        <Field
          className="form__field"
          component="input"
          name="title"
          type="text"
        />
      </div>
      <div className="form__field-wrapper">
        <label className="form__field-description" htmlFor="subtitle">
          Subtitle
        </label>
        <Field
          className="form__field"
          component="input"
          name="subtitle"
          type="text"
        />
      </div>
      <div className="form__field-wrapper">
        <label className="form__field-description" htmlFor="path">
          Image path
        </label>
        <Field
          className="form__field"
          component="input"
          name="path"
          type="text"
        />
      </div>
      <button type="submit">Add image</button>
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
}

const AddImageForm = reduxForm({
  form: 'addImage',
  fields: ['path', 'title', 'subtitle'],
})(Form)

export default AddImageForm
