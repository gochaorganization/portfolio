import React from 'react'
import { shallow } from 'enzyme'
import App from './app'

describe('App tests', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})


    // expect(wrapper.find('.footer__list').exists()).toBeTruthy()

/*
1. Snapshot
2. Testing props. 
3. Testing data types (optional) - jest-extended 
4. Event Testing
5. Testing state

6.Check test coverage
*/
