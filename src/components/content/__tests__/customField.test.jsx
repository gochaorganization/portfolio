import React from 'react'
import { shallow, mount } from 'enzyme'
import CustomField from '../customField'

describe('CustomField tests', () => {
  const defaultProps = {
    label: 'Label',
    meta: { touched: false, error: '' },
  }

  const errorProps = {
    meta: { touched: true, error: 'Error occured' },
  }

  it('should render correctly', () => {
    const content = shallow(<CustomField {...defaultProps} />)
    expect(content).toMatchSnapshot()
  })

  it('should render title', () => {
    const content = shallow(<CustomField {...defaultProps} />)
    expect(content.find('.form-field__description').text()).toEqual(
      defaultProps.label
    )
  })

  it('should show error', () => {
    const content = shallow(<CustomField {...errorProps} />)
    expect(content.find('.form-field__error').text()).toEqual(
      errorProps.meta.error
    )
  })
})
