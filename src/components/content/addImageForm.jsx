import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import CustomField from './customField'

import './addImageForm.sass'

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  } else if (values.title.length > 15) {
    errors.title = 'Title must be 15 characters or less'
  }
  if (!values.subtitle) {
    errors.subtitle = 'Required'
  }

  if (!values.src) {
    errors.src = 'Required'
  }

  return errors
}

const Form = props => {
  const { handleSubmit } = props

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Field label="Title" component={CustomField} name="title" type="text" />
      <Field
        label="Subtitle"
        component={CustomField}
        name="subtitle"
        type="text"
      />
      <Field
        label="Image path"
        component={CustomField}
        name="src"
        type="text"
      />
      <button type="submit">Add image</button>
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
}

const AddImageForm = reduxForm({
  form: 'addImage',
  validate,
  fields: ['path', 'title', 'subtitle'],
})(Form)

export default AddImageForm
