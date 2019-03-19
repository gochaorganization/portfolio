import React from 'react'
import { shallow, mount } from 'enzyme'
import { Form } from '../addImageForm'
import { Field } from 'redux-form'

describe('Form tests', () => {
  const props = {
    handleSubmit: jest.fn(),
  }

  test('renders correctly', () => {
    const form = shallow(<Form {...props} />)
    expect(form).toMatchSnapshot()
  })

  test('form should have 3 fields', () => {
    const form = shallow(<Form {...props} />)
    expect(form.find(Field)).toHaveLength(3)
  })

  //   test('form should be shown', () => {
  //     const wrapper = shallow(<Content {...props} />)
  //     wrapper.find('.content__button').simulate('click')

  //     expect(wrapper.find('.content__form--hidden').exists()).toBeFalsy()
  //   })

  //   test('state menuVisible should change', () => {
  //     const wrapper = shallow(<Content {...props} />)
  //     wrapper.find('.content__button').simulate('click')

  //     expect(wrapper.state().formVisible).toBeTruthy()
  //   })

  // test('state menuVisible should change', () => {
  //   const wrapper = mount(<Content {...props} />)
  //   wrapper.handleSubmit({
  //     src: 'https://loremflickr.com/350/350/dog',
  //     title: 'Title',
  //     subtitle: 'subtitle',
  //   })

  //   expect(wrapper.props.images).toHaveLength(9)
  // })
})
