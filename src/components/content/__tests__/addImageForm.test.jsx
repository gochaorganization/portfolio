import React from 'react'
import { shallow, mount } from 'enzyme'
import { Form } from '../addImageForm'
import { Field } from 'redux-form'
import { validate } from '../addImageForm'

describe('Form tests', () => {
  const props = {
    handleSubmit: jest.fn(),
  }
  it('should render correctly', () => {
    const form = shallow(<Form {...props} />)
    expect(form).toMatchSnapshot()
  })

  it('should have 3 fields', () => {
    const form = shallow(<Form {...props} />)
    expect(form.find(Field)).toHaveLength(3)
  })

  it('should return validation errors', () => {
    const errors = validate({})

    expect(errors.title && errors.src && errors.subtitle)
  })

  it('should validate title', () => {
    const errors = validate({
      title: 'Very long long long long title',
    })

    expect(errors.title)
  })
})
