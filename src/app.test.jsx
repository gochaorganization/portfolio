import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, render } from 'enzyme'
import Footer from './components/footer'
// import ListLink from './components/footer/listlink'

// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<Footer />, div)
//   ReactDOM.unmountComponentAtNode(div)
// })

it('has links', () => {
  const wrapper = shallow(<Footer />)
  console.log(wrapper.debug())

  expect(wrapper.find('.footer__list').exists()).toBe(true)
})
