import React from 'react'
import { shallow } from 'enzyme'
import { Footer } from './components/footer/footer'

describe('basic tests', () => {
  it('has links', () => {
    const wrapper = shallow(<Footer />)
    console.log(wrapper.debug())

    expect(wrapper.find('.footer__list').exists()).toBeTruthy()
  })
})
